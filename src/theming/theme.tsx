import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    uBackground: {
      main: '#263238',
      dark: '#000a12',
      light: '#4f5b62',
      contrastText: '#fff',
    },
    primary: {
      main: '#26a69a',
    },
    mode: 'dark',
  },
  spacing: 2,
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          width: '250px',
        },
      },
    },
  },
});

declare module '@material-ui/core/styles' {
  interface Palette {
    uBackground: Palette['primary'];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    uBackground?: PaletteOptions['primary'];
  }
}

// Update the Button's color prop options
declare module '@material-ui/core/Button' {
  interface ButtonPropsColorOverrides {
    uBackground: true;
  }
}

export default theme;
