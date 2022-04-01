import AuthLayout from "./AuthLayout/AuthLayout";
import "./styles.css";
// import { createTheme } from "@material-ui/core/styles";
// import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff"
    },
    secondary: {
      main: "#8bc34a"
    }
  },

  components: {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          whiteSpace: "normal"
        }
      }
    }
  }
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthLayout />
    </ThemeProvider>
  );
}
