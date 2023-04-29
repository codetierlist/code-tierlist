import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import { GoogleTheme } from "./theme/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { userContext } from "../context/userContext";

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Profile from '../routes/profile';

const userInfo = {
	role: "student", // student, instructor
	name: "John Doe",
}

const App = () => (
	<ThemeProvider theme={GoogleTheme}>
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
	</ThemeProvider>
);

export default App;
