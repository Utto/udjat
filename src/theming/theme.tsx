import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    uBackground: {
      main: '#263238',
      dark: '#000a12',
      light: '#4f5b62',
      contrastText: '#fff',
    },
    uText: {
      main: '#fff',
      light: '#D5D5D5',
    },
    primary: {
      main: '#26a69a',
    },
    mode: 'dark',
  },
  spacing: 2,
  typography: {
    h5: {
      fontSize: 14,
    },
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          width: '250px',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          width: '300px',
          padding: '20px 10px',
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          minHeight: 0,
          width: '20px',
          height: '20px',
        },
      },
    },
  },
});

declare module '@material-ui/core/styles' {
  interface Palette {
    uBackground: Palette['primary'];
    uText: Palette['primary'];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    uBackground?: PaletteOptions['primary'];
    uText?: PaletteOptions['primary'];
  }
}

// Update the Button's color prop options
declare module '@material-ui/core/Button' {
  interface ButtonPropsColorOverrides {
    uBackground: true;
  }
}

export default theme;
