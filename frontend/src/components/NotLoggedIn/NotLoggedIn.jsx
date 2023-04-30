import { Box, Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { Fragment } from "preact";
import { GetGradeColor } from "../../components/GradeColor/GradeColor";
import { InitialsAvatar } from "../../components/InitialsAvatar/InitialsAvatar";
import style from './style.css';

/**
 * This is the landing page that is shown when the user is not logged in.
 * It should not be displayed when they are logged in.
 */
export const NotLoggedIn = () => {
    return (
        <>
            <section class={style.hero}>
                <div class={style.contentContainer}>
                    <div class={style.heroContent}>
                        <h1 class={style.header}>Code Tierlist</h1>
                        <h2 class={style.subtitle}>The leading place to test your code</h2>
                        <Button variant="contained" color="success" sx={{ marginRight: "1.5em" }}>Sign up</Button>
                        <Button color="green">Sign in</Button>
                    </div>
                </div>
            </section>
            <section class={style.section}>
                <h2>Why test with us?</h2>
                <p>We make the tedious part of programming-writing tests, fun and easier! Our platform allows you to write tests for your code and share them with others. It's a great way to learn and practice programming! Our platform is also a great way to test your code before you submit it to your professor.</p>
                <Grid container spacing={2}>
                    <Reason
                        title="Step 1"
                        description="Submit and write your code + a test"
                    />
                    <Reason
                        title="Step 2"
                        description="???"
                    />
                    <Reason
                        title="Step 3"
                        description="Profit!"
                    />
                </Grid>
            </section>
            <section class={style.section}>
                <h2>See how well you're doing with an interactive tierlist.</h2>
                <TierListHardcode />
            </section>
        </>
    );
};

/**
 * A card that displays a reason to use the site. Must be in a grid to be used properly.
 * @param {{title: string, description: string}} props
 * @returns {JSX.Element} Reason component
 */
const Reason = props => {
	return (
        <Grid item xs={12} sm={6} md={4}>
            <Card>
                <CardContent>
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                </CardContent>
            </Card>
        </Grid>
	);
};

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

const TierListHardcode = () => {
    return (
        <Box component="section" sx={{
            margin: "auto",
            marginTop: "0",
            padding: "1em",
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
