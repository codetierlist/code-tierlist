import { Box, useTheme } from "@mui/material";

/**
 * Given a grade letter, return the color associated with it.
 */
export function GetGradeColor(grade) {
	const theme = useTheme();

	switch (grade) {
		case "S": return theme.palette.red;
		case "A": return theme.palette.yellow;
		case "B": return theme.palette.green;
		case "C": return theme.palette.blue;
		case "D": return { main: "#7e7dff", text: "black"};
		case "F": return { main: "#fe80fe", text: "black"};
		default: return theme.palette.red;
	}
}

export const GradeColor = props => {
	let color = GetGradeColor(props.grade);

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
