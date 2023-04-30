import Editor from '@monaco-editor/react';
import { Typography } from "@mui/material";
import { Fragment } from "preact";

/**
 * Submit Code but it lets you pass in the code
 * @param {function} setCode The function to call when the code is changed.
 * @param {string} id The id of the code to submit.
 */
const SubmitCodeRaw = ({setCode, id}) => {return (
    <Fragment>
        <Typography sx={{ margin: "3rem 0 1rem 0" }} variant="h2">
            Submit your code {id}
        </Typography>
        <Typography sx={{ margin: "1rem 0" }}>
            Please enter the code that you want to run against our test cases.
        </Typography>
        <Editor
            height="60vh"
            defaultLanguage="python"
            theme="vs-dark"
            defaultValue="# insert your code here"
            onChange={(value) => setCode(value)}
        />
    </Fragment>
)};

export default SubmitCodeRaw;
