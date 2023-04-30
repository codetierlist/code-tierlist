import { Box, Card, CardActionArea, CardContent, Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'preact/hooks';
import { NotLoggedIn } from '../../components/NotLoggedIn/NotLoggedIn';
import { SidebarCard } from '../../components/SidebarCard/SidebarCard';
import { userContext } from "../../contexts/userContext";
import useAuthApi from '../../hooks/useApi';
import style from './style.css';

const Home = () => {
	const [userInfo] = useContext(userContext);

	const [loading, data, error] = useAuthApi('/assignments', { method: 'get' });

	if (loading) {
		return <div>Loading...</div>
	}

	if (error) {
		console.log(error);
	}

	if (data) {
		console.log(data);
	}

	// prevent rendering if user is not logged in
	if (!userInfo || Object.keys(userInfo).length === 0) { return <NotLoggedIn /> }

	return (
		<Box class={style.home} sx={{
			display: "flex",
			width: "100%",
		}}>
			<Box sx={{
					backgroundColor: "#171717",
					minHeight: "200px",
					overflow: "auto",
					position: "sticky",
					top: "0",
					height: "100vh",
					width: "30%",
				}}>
					<Typography
						variant="h2"
						class={style.yourProjects}
						sx={{
							margin: "1rem"
						}}
					>Your projects</Typography>
					{
						userInfo["myProjects"].map((i) => {
							return (
								<SidebarCard name={i.name} numTests={i.numTests} grade={i.grade} key={i} />
							)
						})
					}
			</Box>
			<Box sx={{
				width: "60%",
				height: "150vh",
				minHeight: "1000px",
			}}>
				<Typography
					variant="h2"
					class={style.yourProjects}
					sx={{
						margin: "1rem"
					}}
				>
					All projects
				</Typography>
				{
					data.map((i) => {
						return (
							<Projects name={i.name} numTests={i.numTests} grade={i.grade} key={i} description={i.description} />
						)
					})
				}
			</Box>
		</Box>
	);
};

const Projects = props => {
	return (
		<a href={
            `/project/${props.name.replaceAll(" ", "-").toLowerCase()}`
        } class={style.noUnderline}>
			<Card sx={{
				margin: "1em",
				width: "100%",
				backgroundColor: "#464646",
				border: "none"
			}}>
				<CardContent component={CardActionArea}>
					<Box>
						<strong class={style.sidebarTitle}>{props.name}</strong>
					</Box>
					<Box sx={{
						// limit to 50 words then add ellipsis
						overflow: "hidden",
						textOverflow: "ellipsis",
						display: "-webkit-box",
						WebkitLineClamp: 1,
						WebkitBoxOrient: "vertical",
					}}>
						{props.description}
					</Box>
					<Box sx={{
						fontSize: "0.8rem",
					}}>
						{props.numTests} tests
					</Box>
				</CardContent>
			</Card>
		</a>
	)
}

export default Home;
