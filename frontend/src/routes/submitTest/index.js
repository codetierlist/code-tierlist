import { Box, Button, Typography } from "@mui/material";
import { useState, useEffect } from 'preact/hooks';

import Editor from '@monaco-editor/react';

const SubmitTest = ({buttonName = "Submit Test", doOnClick = null, noButton = false, id= "bruh"}) => {
    const [code, setCode] = useState("");

    return (
        <Box component="section" sx={{
            maxWidth: "1020px",
            margin: "auto",
        }}>
            <Typography sx={{ margin: "3rem 1rem 1rem 1rem" }} variant="h2">
                Submit Test {id}
            </Typography>
            <Typography sx={{ margin: "1rem" }}>
                To test your code against your classmates’ tests, you will have to submit at least one test case to our database. Please write or paste a functioning test case here for us to validate.
            </Typography>
            <Editor
                height="60vh"
                defaultLanguage="python"
                theme="vs-dark"
                defaultValue="# insert your test here"
                onChange={(value) => setCode(value)}
            />
            {!noButton &&
                <Box sx={{
                    display: "flex",
                    justifyContent: "right",
                    alignItems: "center",
                }}>
                    <Button sx={{ margin: "1rem 0 0 0" }} variant="contained" color="success">{buttonName}</Button>
                </Box>
            }
        </Box>
    )
}

export default SubmitTest;
