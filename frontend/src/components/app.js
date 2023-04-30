import { h } from 'preact';
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
import Project from '../routes/project';
import SubmitCode from '../routes/submitCode';
import SubmitTest from '../routes/submitTest';
import TestNewCode from '../routes/testNewCode';
import TierList from '../routes/tierlist';
import Login from '../routes/login';
import RouteGuard from './RouteGuard';
import { Redirect } from './Redirect';

const App = () => {
	const [user, setUser] = useState({});

	// useEffect(() => {
	// 	const data = {
	// 		// role: "professor", // student, professor
	// 		// name: "John Doe",
	// 		myProjects: [
	// 			{
	// 				name: "CSC148 A2",
	// 				numTest: 150,
	// 				grade: "S",
	// 				description: "This is where the assignment description belongs. We’re no strangers to love you know the rules and so do I Lorem ipsum dolor carrot cake apple pie cider vinegar accessibility",
	// 			},
	// 			{
	// 				name: "CSC236 A1",
	// 				numTest: 51,
	// 				grade: "C",
	// 				description: "This is where the assignment description belongs. We’re no strangers to love you know the rules and so do I Lorem ipsum dolor carrot cake apple pie cider vinegar accessibility",
	// 			},
	// 			{
	// 				name: "CSC209 A4",
	// 				numTest: 20,
	// 				grade: "B",
	// 				description: "This is where the assignment description belongs. We’re no strangers to love you know the rules and so do I Lorem ipsum dolor carrot cake apple pie cider vinegar accessibility",
	// 			}
	// 		]
	// 	}

	// 	setUser(data);
	// }, []);

	return (
		<ThemeProvider theme={GoogleTheme}>
			<userContext.Provider value={user}>
				<CssBaseline />
				<div id="app">
					<Header />
					<main>
						<Router>
							<Home path="/" />
							<Login path="/login" />
							<RouteGuard path="/create" component={Create} />
							<RouteGuard path="/profile" component={Profile} />
							<RouteGuard path="/project/:id" component={Project} />
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
