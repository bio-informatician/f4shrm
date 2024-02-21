import React from 'react';
import { create } from 'jss';
import rtl from 'jss-rtl';
import preset from 'jss-preset-default';
import { StylesProvider, ThemeProvider } from '@material-ui/styles';
import { createTheme } from '@material-ui/core/styles';

function getTheme(theme) {
  document.body.setAttribute('dir', theme.dire);
  return createTheme({
    direction: theme.dire,
    palette: {
      type: theme.paletteType,
      background: {
        default: theme.paletteType === 'light' ? '#f4f7f6' : '#303030',
      },
      text: {
        primary: theme.paletteType === 'light' ? '#616161' : '#fff',
        tertiary: '#525a65',
      },
    },
    typography: {
      fontFamily: `OSWand, "Roboto", "Helvetica", "Arial", sans-serif`,
      // body1:{fontFamily: `SDF, Roboto", "Helvetica", "Arial", sans-serif`},
      // body2:{fontFamily: `SDF, Roboto", "Helvetica", "Arial", sans-serif`},
      // button: {fontFamily: `SDF, Roboto", "Helvetica", "Arial", sans-serif`},
      // caption:{fontFamily: `SDF, Roboto", "Helvetica", "Arial", sans-serif`},
    },
  });
}

// Configure JSS
const jss = create({ plugins: [...preset().plugins, rtl()] });
const jssLtr = create({ plugins: [...preset().plugins] });

export default function RTL(props) {
  const themes = getTheme({
    paletteType: props.theme.paleteType,
    dire: props.theme.dire,
  });

  return (
    <ThemeProvider theme={themes}>
      <StylesProvider jss={themes.direction === 'rtl' ? jss : jssLtr}>
        {props.children}
      </StylesProvider>
    </ThemeProvider>
  );
}
