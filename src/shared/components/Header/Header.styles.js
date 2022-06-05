import { createStyles } from '@material-ui/styles';

export default (theme) => createStyles({
  header: {
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
    width: '100%',
    height: '50px',
    padding: `0 ${theme.spacing(10)}`,
    boxSizing: 'border-box',
  },
});
