import { Box, Button, Card, CardContent, Typography } from "@mui/material";

import { userContext } from "../../contexts/userContext";

import { useEffect, useState, useContext } from "preact/hooks";
import useAuthApi from "../../hooks/useApi";

const Project = (props) => {
    const [loading, data, error] = useAuthApi(`/assignments/${props.id}`, { method: "GET" });

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        console.log(error);
    }

    if (data) {
        console.log(data);
    }

    return (
        <Box component="section" sx={{
            maxWidth: "1020px",
            margin: "auto",
        }}>
            <HeroCard
                sidebarTitle={data.name}
                numTest={data.numTests}
                name={data.name}
            />
            <Typography sx={{ margin: "3rem 1rem 1rem 1rem" }} variant="h2">
                Description
            </Typography>
            <Typography sx={{ margin: "1rem" }}>
                {data.description}
            </Typography>
        </Box>
    )
}

const HeroCard = props => {
    const [user] = useContext(userContext);

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
