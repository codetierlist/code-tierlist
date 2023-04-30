import { Box, Card, CardContent, CardActionArea, Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'preact/hooks';
import { NotLoggedIn } from '../../components/NotLoggedIn/NotLoggedIn';
import { SidebarCard } from '../../components/SidebarCard/SidebarCard';
import { userContext } from "../../contexts/userContext";
import style from './style.css';

const Home = () => {
	const userInfo = useContext(userContext);
	const [allAssignments, setAllAssignments] = useState([]);

	useEffect(() => {
		if (userInfo && Object.keys(userInfo).length !== 0) {
			fetch("http://api.codetierlist.tech/assignments", {
				method: "GET"
			})
				.then((res) => res.json())
				.then((data) => {
					setAllAssignments(data);
				})
				.catch((err) => {
					const errorData = [
						{
							name: "CSC148 A2",
							numTest: 150,
							description: "This is where the assignment description belongs. We’re no strangers to love you know the rules and so do I Lorem ipsum dolor carrot cake apple pie cider vinegar accessibility",
						},
						{
							name: "CSC236 A1",
							numTest: 51,
							description: "This is where the assignment description belongs. We’re no strangers to love you know the rules and so do I Lorem ipsum dolor carrot cake apple pie cider vinegar accessibility",
						},
						{
							name: "CSC209 A4",
							numTest: 20,
							description: "This is where the assignment description belongs. We’re no strangers to love you know the rules and so do I Lorem ipsum dolor carrot cake apple pie cider vinegar accessibility",
						}
					];
					setAllAssignments(errorData);
					console.log(err);
				})
		}
	}, [userInfo])

	// prevent rendering if user is not logged in
	if (userInfo && Object.keys(userInfo).length === 0) { return <NotLoggedIn /> }

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
								<SidebarCard name={i.name} numTest={i.numTest} grade={i.grade} key={i} />
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
					allAssignments.map((i) => {
						return (
							<Projects name={i.name} numTest={i.numTest} grade={i.grade} key={i} description={i.description} />
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
						{props.numTest} tests
					</Box>
				</CardContent>
			</Card>
		</a>
	)
}

export default Home;
