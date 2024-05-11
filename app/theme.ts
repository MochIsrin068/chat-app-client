"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#666CFF",
      contrastText: "#FFFFFF",
    },
    text: {
      secondary: "rgb(234, 234, 255, 60%)",
      disabled: "rgb(234, 234, 255, 38%)",
      primary: "rgb(234, 234, 255, 38%)",
    },
    common: {
      white: "#ffffff",
    },
    divider: "rgb(234, 234, 255, 12%)",
    action: {
      active: "rgb(234, 234, 255, 54%)",
      focus: "rgb(234, 234, 255, 54%)",
    },
    warning: {
      main: "#FDB528",
    },
    success: {
      main: "#72E128",
    },
    background: {
      paper: "#30334E",
    },
  },
  typography: {
    subtitle1: {
      color: "rgb(234, 234, 255, 60%)",
    },
    subtitle2: {
      color: "rgb(234, 234, 255, 38%)",
    },
    caption: {
      color: "rgb(234, 234, 255, 38%)",
    },
    body2: {
      color: "rgb(234, 234, 255, 87%)",
    },
    h6: {
      color: "#666CFF",
    },
  },
});

export default theme;
