import { Box, Button, Card, CardContent, Typography } from "@mui/material";

import { userContext } from "../../contexts/UserContext";

import { useContext } from "preact/hooks";

const ProjectData = {
    title: "Project Title",
    description: "This is where the assignment description belongs. We’re no strangers to love you know the rules and so do I Lorem ipsum dolor carrot cake apple pie cider vinegar accessibility",
    numTest: 150
}

const TierList = () => {
    return (
        <Box component="section" sx={{
            maxWidth: "1020px",
            margin: "auto",
        }}>
            Insert Tier List Here
        </Box>
    )
}

export default TierList;
