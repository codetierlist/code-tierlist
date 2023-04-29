import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import { GoogleTheme } from "./theme/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { userContext } from "../contexts/userContext";
import { useState, useEffect } from 'preact/hooks';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Profile from '../routes/profile';

const App = () => {
	const [user, setUser] = useState({});

	useEffect(() => {
		const data = {
			loggedIn: true,
			role: "student", // student, instructor
			name: "John Doe",
		}

		setUser(data);
	}, []);

	return (
		<ThemeProvider theme={GoogleTheme}>
			<userContext.Provider value={user}>
				<CssBaseline />
				<div id="app">
					<Header />
					<main>
						<Router>
							<Home path="/" />
							<Profile path="/profile/" user="me" />
							<Profile path="/profile/:user" />
						</Router>
					</main>
				</div>
			</userContext.Provider>
		</ThemeProvider>
	);
}

export default App;
