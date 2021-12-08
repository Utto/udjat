import { createStyles } from '@material-ui/styles';

export default (theme) => createStyles({
  historyBlock: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    padding: `0 ${theme.spacing(6)}`,
    marginBottom: theme.spacing(6),
  },
  historyInfo: {
    padding: `${theme.spacing(6)} 0`,
    overflow: 'hidden',
  },
  type: {
    margin: 0,
  },
  structure: {
    margin: `${theme.spacing(6)} 0 !important`,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  date: {
    color: theme.palette.uText.light,
  },
  actions: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: `${theme.spacing(3)} 0 ${theme.spacing(3)} ${theme.spacing(15)}`,
  },
});
