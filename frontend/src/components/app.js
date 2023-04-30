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

const App = () => {
	const [user, setUser] = useState({});

	useEffect(() => {
		const data = {
			role: "professor", // student, professor
			name: "John Doe",
			myProjects: [
				{
					name: "CSC148 A2",
					numTests: 150,
					grade: "S",
					description: "This is where the assignment description belongs. We’re no strangers to love you know the rules and so do I Lorem ipsum dolor carrot cake apple pie cider vinegar accessibility",
				},
				{
					name: "CSC236 A1",
					numTests: 51,
					grade: "C",
					description: "This is where the assignment description belongs. We’re no strangers to love you know the rules and so do I Lorem ipsum dolor carrot cake apple pie cider vinegar accessibility",
				},
				{
					name: "CSC209 A4",
					numTests: 20,
					grade: "B",
					description: "This is where the assignment description belongs. We’re no strangers to love you know the rules and so do I Lorem ipsum dolor carrot cake apple pie cider vinegar accessibility",
				}
			]
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
							<Project path="/project/:id" />
							<SubmitCode path="/submit-code/:id" />
							<SubmitTest path="/submit-test/:id" />
							<TestNewCode path="/test-new-code/:id" />
							<TierList path="/tierlist/:id" />
							<Login path="/login" />
							<Create path="/create" />
						</Router>
					</main>
					<Footer />
				</div>
			</userContext.Provider>
		</ThemeProvider>
	);
}

export default App;
