import { Typography } from "@mui/material";
import Editor from '@monaco-editor/react';
import { Fragment } from "preact";

/**
 * Submit Code but it lets you pass in the code
 * @param {function} setCode The function to call when the code is changed.
 * @param {string} id The id of the code to submit.
 */
const SubmitTestRaw = ({setCode, id}) => {return (
    <Fragment>
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
    </Fragment>
)};

export default SubmitTestRaw;
