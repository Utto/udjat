import { ReactNode, useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import Form from '../../../features/StructureForm/components/Form';
import BST from '../../../features/BST/components/Tree';

import styles from './Page.styles';

type Props = {
  children: ReactNode;
};

const useStyles = makeStyles(styles);

const Page: React.FC<Props> = () => {
  const [list, setList] = useState([]);
  const classes = useStyles();
  return (
    <div className={classes.page}>
      <Form handleChange={setList} />
      <BST list={list} />
    </div>
  );
};

export default Page;
