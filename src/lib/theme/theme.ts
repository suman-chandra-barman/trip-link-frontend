import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#0a3f5f",
    },
    secondary: {
      main: "#666f73",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
        size: "large",
      },
      styleOverrides: {
        root: {
          paddingLeft: "30px",
          paddingRight: "30px",
          textTransform: "capitalize",
          fontSize: "16px",
          text: "#0a3f5f",
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
      },
    },
  },
  typography: {
    body1: {
      color: "#0B1134CC",
    },
  },
});

theme.shadows[1] = "0px 5px 22px lightgray";
