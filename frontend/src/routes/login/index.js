import { Box, Button, Card, CardContent, Typography, TextField } from "@mui/material";

import { userContext } from "../../contexts/UserContext";

import { useContext } from "preact/hooks";

import { GitHub } from "@mui/icons-material";

import style from "./style.css";

const Login = () => {
    return (
        <section class={style.hero}>
            <div class={style.contentContainer}>
                <div class={style.heroContent}>
                    <Card sx={{
                        maxWidth: "500px",
                    }}>
                        <CardContent>
                            <Typography variant="h2" gutterBottom>
                                Sign up / Login
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Login to your account to access your projects. An account will be created if does not exist.
                            </Typography>
                            <Box sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "1rem",
                                marginTop: "1rem",
                            }}>
                            <TextField id="outlined-basic" label="Email" variant="outlined" />
                            <TextField id="outlined-basic" label="Password" variant="outlined" />
                            </Box>
                            <Box sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                marginTop: "1rem",
                            }}>
                            <Button variant="contained" href="/auth/github" color="gray">
                                <GitHub sx={{ marginRight: "0.5rem" }} />
                                Login with GitHub
                            </Button>
                            <Button variant="contained" href="/auth/github" color="success">
                                Continue!
                            </Button>
                            </Box>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default Login;
