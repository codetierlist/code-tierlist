import { createTheme } from "@mui/material";

/**
 * enum for theme types
 * @readonly
 * @enum {string}
 */
export const THEME = {
    /** Light theme
     * @type {string}
     */
    LIGHT: "light",
    /** Dark theme
     * @type {string}
     */
    DARK: "dark",
    /** System default theme
     * @type {string}
     */
    DEFAULT: "system",
}

const mode = THEME.DARK;

export const GoogleTheme = createTheme({
    palette: {
        mode: THEME.DARK,
        primary: { main: "#7fbcff" },
        error: { main: "#ff797e" },
        warning: { main: "#feff7f" },
        info: { main: "#7fbcff" },
        success: { main: "#beff7f" },
        action: {
            light: {
                active: "#000",
                disabled: "#5f6368",
            }
        },
        text: {
            primary: mode === THEME.DARK ? "rgba(255,255,255,.87)" : "#202124",
            secondary: mode === THEME.DARK ? "rgba(255,255,255,.60)" : "#5f6368",
            disabled: mode === THEME.DARK ? "rgba(255,255,255,.38)" : "#5f6368",
            gray: mode === THEME.DARK ? "#c5d3e3" : "#5f6368",
        },
        red: { main: "#ff797e" },
        green: { main: "#beff7f" },
        blue: { main: "#7fbcff" },
        yellow: { main: "#feff7f" },
        gray: { main: "#464646" },
        black: { main: "#000000" },

        // Used by `getContrastText()` to maximize the contrast between
        // the background and the text.
        contrastThreshold: 3,
        // Used by the functions below to shift a color's luminance by approximately
        // two indexes within its tonal palette.
        // E.g., shift from Red 500 to Red 300 or Red 700.
        tonalOffset: 0.2,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: "25565em"
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    width: "100%",
                    margin: "1em 0",
                    borderRadius: "1em",
                    boxShadow: "unset",
                    border: "1px solid",
                    borderColor: mode === THEME.LIGHT ? "#e8eaed" : "#0a0a0a",
                }
            }
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: "1.25em 1.25em 0",
                }
            }
        },
        MuiCardActions: {
            styleOverrides: {
                root: {
                    padding: "1.25em",
                    borderTop: "1px solid",
                    borderColor: mode === THEME.LIGHT ? "#e8eaed" : "#0a0a0a",
                    marginTop: "1.25em",
                    gap: "2em"
                }
            }
        }
    }
})
