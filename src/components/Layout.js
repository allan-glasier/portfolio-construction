/* eslint-disable react/prop-types */
import React from "react";
import "normalize.css";
import Footer from "./Footer";
import GlobalStyles from "../styles/GlobalStyles";
import Typography from "../styles/Typography";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#f36f5e",
      main: "#EF442F",
      dark: "#da2711",
      contrastText: "#fff",
    },
    secondary: {
      light: "#2d4159",
      main: "#1C2837",
      dark: "#0b0f15",
      contrastText: "#fff",
    },
  },
});

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Typography />
      {/* <Nav /> */}
      {children}
      <Footer />
    </ThemeProvider>
  );
}
