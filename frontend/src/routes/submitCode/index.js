import { Box, Button, CircularProgress } from "@mui/material";
import { useState } from 'preact/hooks';
import { postCodeToAPI } from '../../utils/PostCodeToAPI';
import SubmitCodeRaw from "./submitCodeRaw";

const SubmitTest = ({buttonName = "Submit", doOnClick = null, noButton = false, id = "bruh"}) => {
    const [code, setCode] = useState("");
    const [loading, setLoading] = useState(false);

    const submit = () => {
        setLoading(true);

        postCodeToAPI({url: "code", id, code})
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

            <SubmitCodeRaw setCode={setCode} id={id} />

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
