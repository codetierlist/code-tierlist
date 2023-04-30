import { Box, Button, Typography, CircularProgress } from "@mui/material";
import { useState } from 'preact/hooks';
import { postCodeToAPI } from '../../utils/PostCodeToAPI';

import Editor from '@monaco-editor/react';

/**
 * A component that allows the user to submit a test case.
 * @param {string} buttonName The text to display on the button.
 * @param {function} doOnClick The function to call when the button is clicked.
 * @param {boolean} noButton Whether to display the button or not.
 * @param {string} id The ID of the code to submit the test for.
 * @param {string} code The code to submit.
 * @param {function} setCode The function to call when the code is changed.
 * @returns
 */
const SubmitTest = ({buttonName = "Submit Test", doOnClick = null, noButton = false, id = "bruh"}) => {
    const [code, setCode] = useState("");
    const [loading, setLoading] = useState(false);

    const submit = () => {
        setLoading(true);

        postCodeToAPI({url: "test", id, code})
            .then((res) => {
                console.log(res);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                // HACK: when API is down, continue anyway!
                setLoading(false);
            });

        if (doOnClick) {
            doOnClick();
        }
    };

    return (
        <Box component="section" sx={{
            maxWidth: "1020px",
            margin: "auto",
        }}>
            <Typography sx={{ margin: "3rem 0 1rem 0" }} variant="h2">
                Submit Test {id}
            </Typography>
            <Typography sx={{ margin: "1rem 0" }}>
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
                    <Button
                        sx={{ margin: "1rem 0 0 0" }}
                        variant="contained"
                        color="success"
                        onClick={submit}
                        disabled={loading}
                    >
                    {
					    loading &&
                        <CircularProgress
                            size={16}
                            sx={{ marginRight: "0.5em" }}
                        />
					}
                        {buttonName}
                    </Button>
                </Box>
            }
        </Box>
    )
}

export default SubmitTest;
