import { Box, Button, Grid, Card, CardContent, Typography } from "@mui/material";

import { userContext } from "../../contexts/userContext";

import { Fragment } from "preact";

import { useContext } from "preact/hooks";

import { GetGradeColor } from "../../components/GradeColor/GradeColor";

import style from "./style.css";

const Hardcode = [
    {
        tier: "S",
        people: [
            "John Doe",
            "Jane Doe",
            "John Smith",
        ]
    },
    {
        tier: "A",
        people: [
            "John Doe",
            "Jane Doe",
            "John Smith",
        ]
    },
    {
        tier: "B",
        people: [
            "John Doe",
            "Jane Doe",
            "John Smith",
        ]
    },
    {
        tier: "C",
        people: [
            "John Doe",
            "Jane Doe",
            "John Smith",
        ]
    },
    {
        tier: "D",
        people: [
            "John Doe",
            "Jane Doe",
            "John Smith",
        ]
    },
]

const TierList = () => {
    return (
        <Grid container  spacing={2} component="section" sx={{
            maxWidth: "1020px",
            margin: "auto",
            marginTop: "0",
        }}>
            {
                Hardcode.map((tier, index) => {return (
                    <Fragment key={index}>
                        <Grid item xs={3} key={index} sx={{
                            backgroundColor: GetGradeColor(tier.tier).main,
                        }}>
                            <Typography variant="h4" sx={{
                                color: "white",
                            }}>
                                {tier.tier}
                            </Typography>
                        </Grid>
                        <Grid item xs={9} key={index} sx={{
                            backgroundColor: "#1e1e1e",
                        }}>
                            <Grid container spacing={2}>
                                {
                                    tier.people.map((person, index) => {return (
                                        <Card sx={{
                                            backgroundColor: "#1e1e1e",
                                            color: "white",
                                            maxWidth: "10em",
                                        }} key={index}>
                                            <CardContent>
                                                <Typography variant="h5">
                                                    {person}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    )})
                                }
                            </Grid>
                        </Grid>
                    </Fragment>
                )})
            }
        </Grid>
    )
}

export default TierList;
