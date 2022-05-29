import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useDispatch } from 'react-redux';
import { DeleteForever, Restore } from '@material-ui/icons';

import { setStructure } from 'state/structure';
import names from 'constants/structureTypes';
import Color from 'types/color';

import HistoryActions from '../HistoryActions';
import format from '../../utils/format';
import { HistoryItem } from '../../types';

import styles from './HistoryBlock.styles';

const useStyles = makeStyles(styles);

const HistoryBlock: React.FC<{item: HistoryItem}> = ({ item }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const load = () => dispatch(setStructure({
    type: item.type, value: JSON.parse(item.value),
  }));

  const remove = () => {};

  const actions = [
    { title: 'Restore', Icon: Restore, fn: load },
    {
      title: 'Delete',
      Icon: DeleteForever,
      color: 'error' as Color,
      fn: remove,
    },
  ];

  return (
    <Paper className={classes.historyBlock} elevation={3}>
      <div className={classes.historyInfo}>
        <Typography variant="h5" className={classes.type}>{names[(item.type)]}</Typography>
        <Typography className={classes.structure}>{item.value}</Typography>
        <Typography variant="caption" className={classes.date}>{format(item.createdDate)}</Typography>
      </div>
      <div className={classes.actions}>
        <HistoryActions actions={actions} />
      </div>
    </Paper>
  );
};

export default HistoryBlock;
