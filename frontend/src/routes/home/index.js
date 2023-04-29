import { h } from 'preact';
import style from './style.css';
import { NotLoggedIn } from '../../components/NotLoggedIn/NotLoggedIn';
import { userContext } from "../../contexts/UserContext";
import { useContext } from 'preact/hooks';
import { Grid, Box, Card, CardContent, Typography } from '@mui/material';
import { SidebarCard } from '../../components/SidebarCard/SidebarCard';
import { Urlify } from '../../components/Urlify/Urlify';

const Home = () => {
	const userInfo = useContext(userContext);

	if (userInfo && Object.keys(userInfo).length === 0) { return <NotLoggedIn /> }

	return (
		<Grid class={style.home} container spacing={2} sx={{
			marginTop: "0",
		}}>
			<Grid item xs={12} md={3} sx={{
					height: {
						xs: "unset",
						md: "100vh",
					},
					position: "sticky",
					backgroundColor: "#212121",
					zIndex: 0,
				}}>
					<Typography
						variant="h2"
						class={style.yourProjects}
						sx={{
							margin: "0 1rem 1rem 1rem"
						}}
					>Your projects</Typography>
					{
						userInfo["myProjects"].map((i) => {
							return (
								<SidebarCard name={i.name} numTest={i.numTest} grade={i.grade} key={i} />
							)
						})
					}
			</Grid>
			<Grid item xs={12} md={9}>
				<Typography
					variant="h2"
					class={style.yourProjects}
					sx={{
						margin: "0 1rem 1rem 1rem"
					}}
				>
					All projects
				</Typography>
				{
					userInfo["myProjects"].map((i) => {
						return (
							<Projects name={i.name} numTest={i.numTest} grade={i.grade} key={i} description={i.description} />
						)
					})
				}
			</Grid>
		</Grid>
	);
};

const Projects = props => {
	return (
		<a href={
            `/project/${props.name.replaceAll(" ", "-").toLowerCase()}`
        } class={style.noUnderline}>
			<Card sx={{
				margin: "1em",
				width: "90%",
				backgroundColor: "#464646",
				border: "none"
			}}>
				<CardContent>
					<Box sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
					}}>
						<Box>
							<strong class={style.sidebarTitle}>{props.name}</strong> <br />
							{props.numTest} tests
						</Box>
					</Box>
				</CardContent>
			</Card>
		</a>
	)
}

export default Home;
