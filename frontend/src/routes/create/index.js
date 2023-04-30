import { Box, Button, Typography, TextField, CircularProgress } from "@mui/material";
import { userContext } from "../../contexts/userContext";
import { useState, useContext } from "preact/hooks";

import Editor from '@monaco-editor/react';

async function PublishAssignment(name, description, solution) {
    await fetch("http://api.codetierlist.tech/assignments", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
            description,
            solution,
        })
    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            return data;
        })
        .catch((err) => {
            console.log(err);
            return false;
        });
}

const Create = () => {
    const [user] = useContext(userContext);
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [solution, setSolution] = useState("");

    if (user && user["role"] !== "instructor") { return <Typography>You are not a instructor</Typography> }

    return (
        <Box component="section" sx={{
            maxWidth: "1020px",
            margin: "auto",
        }}>
            <Typography sx={{ margin: "3rem 1rem 1rem 1rem" }} variant="h2">
                Create a new assignment
            </Typography>
            <Typography sx={{ margin: "1rem" }}>
                To create a new assignment for students to use, provide the name of the assignment, a description, and the solutions to the tests. The solutions will be used to verify student tests and grade them accordingly. The solutions will never be shown to students and will only be used to verify their tests.
            </Typography>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                width: "100%",
            }}>
                <TextField
                    sx={{ margin: "1rem" }}
                    label="Assignment Name"
                    variant="outlined"
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField
                    sx={{ margin: "1rem" }}
                    label="Assignment Description"
                    variant="outlined"
                    onChange={(e) => setDescription(e.target.value)}
                />
            </Box>
            <Editor
                height="60vh"
                defaultLanguage="python"
                theme="vs-dark"
                defaultValue="# insert your solution here"
                onChange={(value) => setSolution(value)}
            />
            <Box sx={{
                display: "flex",
                justifyContent: "right",
                alignItems: "center",
            }}>
                <Button
                    sx={{ margin: "1rem 0 0 0" }}
                    variant="contained"
                    color="success"
                    disabled={loading || name === "" || description === "" || solution === ""}
                    onClick={() => {
                        setLoading(true);
                        PublishAssignment(name, description, solution)
                            .then(() => {
                                setLoading(false);
                                window.location.href = "/"; // HACK
                            })
                            .catch((err) => {
                                console.log(err);
                                setLoading(false);
                            });
                    }}
                >
				    {
				        loading && <CircularProgress size={16} sx={{
				            marginRight: "0.5em"
				        }} />
				    }
                    Submit new assignment
                </Button>
            </Box>
        </Box>
    )
}

export default Create;
