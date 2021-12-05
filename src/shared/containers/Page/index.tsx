import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'state/store';
import { makeStyles } from '@material-ui/styles';

import { InputList } from 'types/input';

import { setStructure } from 'state/structure';
import { addHistoryItem } from '../../../features/History/state/history';

import Form from '../../../features/StructureForm';
import BST from '../../../features/BST/components/Tree';

import styles from './Page.styles';

const useStyles = makeStyles(styles);

const Page: React.FC<{}> = () => {
  const { list } = useSelector((state: RootState) => state.structureState);
  const classes = useStyles();
  const dispatch = useDispatch();

  const setList = (type: string, data: InputList) => {
    const payload = { type, list: data };
    dispatch(setStructure(payload));
    dispatch(addHistoryItem(payload));
  };

  return (
    <div className={classes.page}>
      <Form handleChange={setList} />
      <BST list={list} />
    </div>
  );
};

export default Page;
