import { Box, Button, Card, CardContent, Typography } from "@mui/material";

import { userContext } from "../../contexts/userContext";

import { useContext } from "preact/hooks";

const ProjectData = {
    title: "Project Title",
    description: "This is where the assignment description belongs. We’re no strangers to love you know the rules and so do I Lorem ipsum dolor carrot cake apple pie cider vinegar accessibility",
    numTest: 150
}

const Project = () => {
    return (
        <Box component="section" sx={{
            maxWidth: "1020px",
            margin: "auto",
        }}>
            <HeroCard
                sidebarTitle={ProjectData.title}
                numTest={ProjectData.numTest}
                name={ProjectData.title}
            />
            <Typography sx={{ margin: "3rem 1rem 1rem 1rem" }} variant="h2">
                Description
            </Typography>
            <Typography sx={{ margin: "1rem" }}>
                {ProjectData.description}
            </Typography>
        </Box>
    )
}

const HeroCard = props => {
    const user = useContext(userContext);

	return (
		<Card sx={{
			margin: "1em",
			backgroundColor: "#464646",
			border: "none",
            width: "calc(100% - 2em)",
		}}>
			<CardContent>
				<Box sx={{
					display: "flex",
					justifyContent: "space-between" ,
					alignItems: "center",
				}}>
					<Box>
						<Typography variant="h2" gutterBottom>{props.name}</Typography>
						{props.numTest} tests
					</Box>
                    <Box>
                        {
                            // HACK   POTENTIAL NON WORKING CODE -- SAVE FOR INTEGRATION
                            // TODO   POTENTIAL NON WORKING CODE -- SAVE FOR INTEGRATION
                            // FIXME  POTENTIAL NON WORKING CODE -- SAVE FOR INTEGRATION
                            user["myProjects"].includes(props.name) ?
                                <ExistingProject name={props.name} /> :
                                <NotExistingProject name={props.name} />
                        }
                    </Box>
				</Box>
			</CardContent>
		</Card>
	)
}

const NotExistingProject = props => (
    <>
        <Button
            variant="contained"
            sx={{
                marginRight: "1em",
                fontSize: "1.1em",
                textTransform: "none"
            }}
            color="warning"
            component="a"
            href={`../test-new-code/${props.name.replaceAll(" ", "-").toLowerCase()}`}
        >
            Test your code
        </Button>
    </>
);

const ExistingProject = props => (
    <>
        <Button
            variant="contained"
            sx={{
                marginRight: "1em",
                fontSize: "1.1em",
                textTransform: "none"
            }}
            color="warning"
            component="a"
            href={`../submit-code/${props.name.replaceAll(" ", "-").toLowerCase()}`}
        >
            Test new code
        </Button>
        <Button
            variant="contained"
            sx={{
                fontSize: "1.1em",
                textTransform: "none"
            }}
            color="warning"
            component="a"
            href={`../submit-test/${props.name.replaceAll(" ", "-").toLowerCase()}`}
        >
            Add more tests
        </Button>
    </>
);

export default Project;