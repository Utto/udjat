import { createStyles } from '@material-ui/styles';

export default (theme) => createStyles({
  '@global': {
    body: {
      padding: 0,
      margin: 0,
      outline: 'none',
      fontFamily: 'Roboto',
      background: theme.palette.uBackground.main,
    },
  },
});
