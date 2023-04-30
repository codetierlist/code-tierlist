import { Box, Button, Typography, TextField } from "@mui/material";
import { userContext } from "../../contexts/userContext";
import { useContext } from "preact/hooks";

import Editor from '@monaco-editor/react';

const Create = () => {
    const user = useContext(userContext);

    if (user && user["role"] !== "instructor") { return <Typography>You are not a instructor</Typography> }

    return (
        <Box component="section" sx={{
            maxWidth: "1020px",
            margin: "auto",
        }}>
            <Typography sx={{ margin: "3rem 1rem 1rem 1rem" }} variant="h2">
                Create a new project
            </Typography>
            <Typography sx={{ margin: "1rem" }}>
                To create a new project for students to use, provide the name of the project, a description, and the solutions to the tests. The solutions will be used to verify student tests and grade them accordingly. The solutions will never be shown to students and will only be used to verify their tests.
            </Typography>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                width: "100%",
            }}>
                <TextField sx={{ margin: "1rem" }} label="Project Name" variant="outlined" />
                <TextField sx={{ margin: "1rem" }} label="Project Description" variant="outlined" />
            </Box>
            <Editor height="60vh" defaultLanguage="python" theme="vs-dark" defaultValue="# insert your solution here" />
            <Box sx={{
                display: "flex",
                justifyContent: "right",
                alignItems: "center",
            }}>
                <Button sx={{ margin: "1rem 0 0 0" }} variant="contained" color="success">Submit new project</Button>
            </Box>
        </Box>
    )
}

export default Create;
