import { Box, Button, Card, CardContent, Typography } from "@mui/material";

import { userContext } from "../../contexts/userContext";

import { useEffect, useState, useContext } from "preact/hooks";

const Project = ({id}) => {
    // HACK
    const [projectData, setProjectData] = useState({
        name: "CSC148 A2",
        numTest: 150,
        description: "This is where the assignment description belongs. We’re no strangers to love you know the rules and so do I Lorem ipsum dolor carrot cake apple pie cider vinegar accessibility",
    });

    useEffect(() => {
        // if 404, setProjectData to default
        fetch(`http://api.codetierlist.tech/assignments`, {
            method: "GET"
        })
            .then((res) => res.json())
            .then((data) => {
                data.forEach((assignment) => {
                    if (assignment["name"].toLowerCase().replaceAll(" ", "-") === id.toLowerCase()) {
                        setProjectData(assignment);
                    }
                })
            })
            .catch((err) => {
                console.log(err);
            })
            console.log(projectData);
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Box component="section" sx={{
            maxWidth: "1020px",
            margin: "auto",
        }}>
            <HeroCard
                sidebarTitle={projectData["name"] ? projectData["name"] : "Loading" }
                numTests={projectData["numTests"] ? projectData["numTests"] : "Loading" }
                name={projectData["name"] ? projectData["name"] : "Loading" }
            />
            <Typography sx={{ margin: "3rem 1rem 1rem 1rem" }} variant="h2">
                Description
            </Typography>
            <Typography sx={{ margin: "1rem" }}>
                {projectData["description"]}
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
						{props.numTests} tests
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
