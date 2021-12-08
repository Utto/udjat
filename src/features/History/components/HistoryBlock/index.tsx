import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import names from 'constants/structureTypes';

import HistoryActions from '../HistoryActions';
import format from '../../utils/format';
import { HistoryItem } from '../../types';
import styles from './HistoryBlock.styles';

const useStyles = makeStyles(styles);

const HistoryBlock: React.FC<{item: HistoryItem}> = ({ item }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.historyBlock} elevation={3}>
      <div className={classes.historyInfo}>
        <Typography variant="h5" className={classes.type}>{names[item.type]}</Typography>
        <Typography className={classes.structure}>{item.structure}</Typography>
        <Typography variant="caption" className={classes.date}>{format(item.createdDate)}</Typography>
      </div>
      <div className={classes.actions}>
        <HistoryActions />
      </div>
    </Paper>
  );
};

export default HistoryBlock;
