import { Button, Grid, Card, CardContent } from "@mui/material";
import style from './style.css';
import { Link } from "preact-router";

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
                        <Link href="/register">
                            <Button variant="contained" color="success" sx={{ marginRight: "1.5em" }}>Sign up</Button>
                        </Link>
                        <Link href="/login">
                            <Button color="green">Sign in</Button>
                        </Link>
                    </div>
                </div>
            </section>
            <section class={style.section}>
                <h2>Why test with us?</h2>
                <p>We make the tedious part of programming-writing tests, fun and easier! Our platform allows you to write tests for your code and share them with others. It's a great way to learn and practice programming! Our platform is also a great way to test your code before you submit it to your instructor.</p>
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
                {/* todo */}
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
