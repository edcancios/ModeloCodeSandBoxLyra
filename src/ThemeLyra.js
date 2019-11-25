import { create } from "jss";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import JssProvider from "react-jss/lib/JssProvider";
import React, { useState } from "react";
import { createGenerateClassName, jssPreset } from "@material-ui/core/styles";

//
import Demo from "./Components/Demo";
import ExampleData from "./API/ExampleData";
import Reducer from "./Reducer";

const jss = create(jssPreset());
const generateClassName = createGenerateClassName();

const ThemeLyra = props => {
  const [theme] = useState({
    typography: {
      useNextVariants: true,
      fontFamily: "'Titillium Web', sans-serif"
    },
    palettePers: {
      type: "light",
      primary: "#001064",
      secondary: "#ffffff",
      tertiary: "#ffffff",
      fourth: "#f5f5f5",
      line: "#f5f5f5",
      text: {
        icon: "#d4a977",
        primary: "#ffffff",
        secondary: "#696969",
        tertiary: "#696969",
        fourth: "#696969"
      },
      graph: {
        text: "#000000",
        background: "#ffffff",
        axis: ["#001064", "#d4a977", "#228B22", "#DC7633  ", "#A52A2A"]
      },
      maps: "light"
    }
  });
  const muiTheme = createMuiTheme(theme);
  return (
    <Reducer>
      <ThemeProvider theme={muiTheme}>
        <JssProvider jss={jss} generateClassName={generateClassName}>
          <Demo />
        </JssProvider>
      </ThemeProvider>
    </Reducer>
  );
};

export default ThemeLyra;
