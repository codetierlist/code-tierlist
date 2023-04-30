import { Box, Card, CardContent, CardActionArea } from '@mui/material';
import { GradeColor } from '../../components/GradeColor/GradeColor';
import style from './style.css';

export const SidebarCard = props => {
    return (
        <a href={
            `/assignments/${props.name.replaceAll(" ", "-")}`
        } class={style.noUnderline}>
            <Card sx={{
                backgroundColor: "#464646",
                border: "none",
                margin: "1em",
                textDecoration: "none",
                width: "90%",
            }}>
                <CardContent component={CardActionArea}>
                    <Box sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}>
                        <Box>
                            <strong class={style.sidebarTitle}>{props.name}</strong> <br />
                            {props.numTests} tests
                            {props.description && <p>{props.description}</p>}
                        </Box>
                        <Box>
                            <GradeColor grade={props.grade} />
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </a>
    )
}
