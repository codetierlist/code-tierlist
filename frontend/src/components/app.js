import { Router } from 'preact-router';

import Header from './header';
import Footer from './footer';
import { GoogleTheme } from "./theme/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { userContext } from "../contexts/userContext";
import { useState, useEffect } from 'preact/hooks';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Create from '../routes/create';
import Profile from '../routes/profile';
import Assignment from '../routes/assignment';
import SubmitCode from '../routes/submitCode';
import SubmitTest from '../routes/submitTest';
import TestNewCode from '../routes/testNewCode';
import TierList from '../routes/tierlist';
import Login from '../routes/login';
import RouteGuard from './RouteGuard';
import { Redirect } from './Redirect';
import { setAuthToken } from '../utils/setAuthToken';
import axios from 'axios';

const App = () => {
	const [user, setUser] = useState(null);

	useEffect(async () => {
		const token = localStorage.getItem("access_token");

		if (token) {
			setAuthToken(token);
			const backendUrl = "http://localhost:3000"; // TODO: Fix this
			let response = await axios.get(backendUrl + "/auth/profile");
			setUser(response.data);
		}
	}, []);

	const logout = () => {
		const refresh_token = localStorage.getItem("refresh_token");
		localStorage.removeItem("access_token");
		localStorage.removeItem("refresh_token");
		setAuthToken(null);
		setUser(null);
		const backendUrl = "http://localhost:3000"; // TODO: Fix this
		return axios.post(backendUrl + "/auth/logout", {
			refresh_token,
		});
	}

	return (
		<ThemeProvider theme={GoogleTheme}>
			<userContext.Provider value={[user, setUser]}>
				<CssBaseline />
				<div id="app">
					<Header logout={logout} />
					<main>
						<Router>
							<Home path="/" />
							<Login path="/login" setUser={setUser} />
							<Login path="/register" />
							<RouteGuard path="/create" component={Create} />
							<RouteGuard path="/profile" component={Profile} />
							<RouteGuard path="/assignments/:id" component={Assignment} />
							<RouteGuard path="/submit-code/:id" component={SubmitCode} />
							<RouteGuard path="/submit-test/:id" component={SubmitTest} />
							<RouteGuard path="/test-new-code/:id" component={TestNewCode} />
							<RouteGuard path="/tierlist/:id" component={TierList} />
							<Redirect to="/" default />
						</Router>
					</main>
					<Footer />
				</div>
			</userContext.Provider>
		</ThemeProvider>
	);
}

export default App;
