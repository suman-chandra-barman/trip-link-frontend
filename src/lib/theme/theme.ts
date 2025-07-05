import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
<<<<<<< HEAD
      main: "#0077B6",
=======
      main: "#ffcc2a",
>>>>>>> 1f64f29f96b17cb5712727567b46d8453032abb8
    },
    secondary: {
      main: "#0F172A",
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
<<<<<<< HEAD
          fontWeight: 500,
=======
          fontWeight: "bold",
>>>>>>> 1f64f29f96b17cb5712727567b46d8453032abb8
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
