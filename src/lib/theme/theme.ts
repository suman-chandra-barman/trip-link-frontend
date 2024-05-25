import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#40a737",
    },
    secondary: {
      main: "#666f73",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
        color: "success",
        size: "large",
      },
      styleOverrides: {
        root: {
          paddingLeft: "30px",
          paddingRight: "30px",
          textTransform: "capitalize",
          fontSize: "16px",
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
