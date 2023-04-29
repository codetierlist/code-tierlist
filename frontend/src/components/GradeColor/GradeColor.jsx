import { Box, useTheme } from "@mui/material";

export const GradeColor = props => {
	let color = "red";
	const theme = useTheme();

	switch (props.grade) {
		case "S":
			color = theme.palette.red;
			break;
		case "A":
			color = theme.palette.green;
			break;
		case "B":
			color = theme.palette.blue;
			break;
		case "C":
			color = theme.palette.yellow;
			break;
		default:
			color = theme.palette.grey;
	}

	return (
		<Box sx={{
			background: color.main,
			color: `${color.text} !important`,
			fontWeight: "bold",
			width: "4rem",
			height: "4rem",
			lineHeight: "4rem",
			textAlign: "center",
			fontSize: "2em",
			borderRadius: "1rem",
		}}>
			{props.grade}
		</Box>
	)
};
