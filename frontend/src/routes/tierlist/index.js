import { Box, Button, Grid, Card, CardContent, Typography } from "@mui/material";
import { userContext } from "../../contexts/userContext";
import { Fragment } from "preact";
import { useContext } from "preact/hooks";
import { InitialsAvatar } from "../../components/InitialsAvatar/InitialsAvatar";
import { GetGradeColor } from "../../components/GradeColor/GradeColor";
import style from "./style.css";

const Hardcode = [
    {
        tier: "S",
        people: [
            "Clara",
            "Haruno Sora",
            "Kobayashi Matcha",
        ]
    },
    {
        tier: "A",
        people: [
            "Yuezheng Ling",
            "Vocaloid Matryoshka Names",
            "Nekomura Iroha",
            "Yuezheng Longya",
            "Kobayashi Matcha",
            "Kizuna Akari",
        ]
    },
    {
        tier: "B",
        people: [
            "Megurine Luka",
            "Yuzuki Yukari",
            "Utatane Piko",
            "You"
        ]
    },
    {
        tier: "C",
        people: [
            "Tone Rion",
            "Sweet Ann",
        ]
    },
    {
        tier: "F",
        people: [
            "Sf-A2 Miki",
            "Masaoka Azuki",
        ]
    },
]

function GetLetterGrade(solved, total) {
    const percent = solved / total;
    let grade = "F";

    if (percent >= 0.9) {
        grade = "S";
    } else if (percent >= 0.8) {
        grade = "A";
    } else if (percent >= 0.7) {
        grade = "B";
    } else if (percent >= 0.6) {
        grade = "C";
    }
    return grade;
}

const TierList = () => {
    return (
        <Box component="section" sx={{
            maxWidth: "1020px",
            margin: "auto",
            marginTop: "0",
            padding: "2em",
        }}>
            <Grid container spacing={2} sx={{
                background: "black",
                padding: "2em"
            }}>
            {
                Hardcode.map((tier, index) => {return (
                    <Fragment key={index}>
                        <Grid item xs={3} sx={{
                            backgroundColor: GetGradeColor(tier.tier).main,
                            borderBottom: "1px solid #2e2e2e",
                            textAlign: "center",
                            padding: "0 !important",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}>
                            <Typography variant="h4" sx={{
                                color: `${GetGradeColor(tier.tier).text} !important`,
                            }}>
                                {tier.tier}
                            </Typography>
                        </Grid>
                        <Grid item xs={9} sx={{
                            backgroundColor: "#1e1e1e",
                            borderBottom: "1px solid #2e2e2e",
                        }}>
                            <Grid container spacing={2}>
                                {
                                    tier.people.map((person, index) => {return (
                                        <InitialsAvatar
                                            name={person}
                                            key={index}
                                            className={ person === "You" ? style.you : "" }
                                            sx={{
                                                margin: "2em 1em",
                                            }}
                                        />
                                    )})
                                }
                            </Grid>
                        </Grid>
                    </Fragment>
                )})
            }
            </Grid>
        </Box>
    )
}

export default TierList;
