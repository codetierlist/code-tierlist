import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import { GoogleTheme } from "./theme/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { userContext } from "../contexts/UserContext";
import { useState, useEffect } from 'preact/hooks';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Profile from '../routes/profile';
import Project from '../routes/project';

const App = () => {
	const [user, setUser] = useState({});

	useEffect(() => {
		const data = {
			loggedIn: false,
			role: "student", // student, professor
			name: "John Doe",
			myProjects: [
				{
					name: "CSC148 A2",
					numTest: 150,
					grade: "S",
					description: "This is where the assignment description belongs. We’re no strangers to love you know the rules and so do I Lorem ipsum dolor carrot cake apple pie cider vinegar accessibility",
				},
				{
					name: "CSC236 A1",
					numTest: 51,
					grade: "C",
					description: "This is where the assignment description belongs. We’re no strangers to love you know the rules and so do I Lorem ipsum dolor carrot cake apple pie cider vinegar accessibility",
				},
				{
					name: "CSC209 A4",
					numTest: 20,
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
						</Router>
					</main>
				</div>
			</userContext.Provider>
		</ThemeProvider>
	);
}

export default App;
