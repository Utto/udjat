import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'state/store';
import { makeStyles } from '@material-ui/styles';

import { Structure } from 'types/structure';

import { setStructure } from 'state/structure';
import { addHistoryItem } from '../../../features/History/state/history';

import Form from '../../../features/StructureForm';
import BST from '../../../features/BST/components/Tree';

import styles from './Page.styles';

const useStyles = makeStyles(styles);

const Page: React.FC<{}> = () => {
  const { value, type } = useSelector((state: RootState) => state.structureState);
  const classes = useStyles();
  const dispatch = useDispatch();

  const setList = (payload: Structure) => {
    dispatch(setStructure(payload));
    dispatch(addHistoryItem(payload));
  };

  return (
    <div className={classes.page}>
      <Form
        savedValue={value.join(', ')}
        savedType={type}
        handleChange={setList}
      />
      <BST list={value} />
    </div>
  );
};

export default Page;
