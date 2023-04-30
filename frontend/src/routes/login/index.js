import axios from "axios";
import { Box, Button, Card, CardContent, Typography, TextField } from "@mui/material";
import style from "./style.css";
import { route } from "preact-router";
import { useState } from "preact/hooks";
import { setAuthToken } from "../../utils/setAuthToken";

const Login = (props) => {
    const { path } = props;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "email") {
            setEmail(value);
        } else {
            setPassword(value);
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const backendUrl = 'http://localhost:3000'; // TODO: fix url
        axios.post(backendUrl + '/auth' + path, {
            email: email,
            password: password
        })
        .then(response => {
            //get token from response
            const { access_token, refresh_token } = response.data;

            //set JWT token to local
            localStorage.setItem("access_token", access_token);
            localStorage.setItem("refresh_token", refresh_token);

            //set token to axios common header
            setAuthToken(access_token);

            return axios.get(backendUrl + '/auth/profile');
        })
        .then((response) => {
            props.setUser(response.data);

            //redirect user to home page
            route("/", true);
        })
        .catch(err => console.log(err));
    };

    return (
        <section class={style.hero}>
            <div class={style.contentContainer}>
                <div class={style.heroContent}>
                    <Card sx={{
                        maxWidth: "500px",
                    }}>
                        <CardContent>
                            <form onSubmit={handleSubmit}>
                                <Typography variant="h2" gutterBottom>
                                    {
                                        path === "/register" ? "Register" : "Login"
                                    }
                                </Typography>
                                <Box sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "1rem",
                                    marginTop: "1rem",
                                }}>
                                <TextField required id="outlined-basic" label="Email" variant="outlined" name="email" onChange={handleChange} />
                                <TextField required id="outlined-basic" label="Password" variant="outlined" name="password" type="password" onChange={handleChange} />
                                </Box>
                                <Box sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    marginTop: "1rem",
                                }}>
                                <Button variant="contained" type="submit" color="success">
                                    Continue!
                                </Button>
                                </Box>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default Login;
