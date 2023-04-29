import { Box, useTheme } from "@mui/material";

export const GetGradeColor = ({grade}) => {
	const theme = useTheme();

	switch (grade) {
		case "S": return theme.palette.red;
		case "A": return theme.palette.green;
		case "B": return theme.palette.blue;
		case "C": return theme.palette.yellow;
		case "D": return theme.palette.yellow;
		default: return theme.palette.red;
	}
}

export const GradeColor = props => {
	let color = GetGradeColor(props);

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
