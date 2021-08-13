import React from 'react';
import { makeStyles } from '@material-ui/styles';

import { initBST } from '../utils/convertToBst';
import { getPositionedNodes } from '../utils/tree';

import { inputList } from '../utils/types';

import Node from './Node';

type Props = {
  list: inputList,
}

const useStyles = makeStyles({
  container: {
    position: 'relative',
    marginTop: '20px',
    border: '1px solid black',
    overflow: 'visible',
  },
});

const BinarySearchTree: React.FC<Props> = ({ list }) => {
  const classes = useStyles();
  if (!list) return null;
  const withPositions = getPositionedNodes(initBST(list)) || [];
  console.log(withPositions);
  return (
    <div className={classes.container}>
      {withPositions.map((node: any) => (
        <Node
          value={node.value}
          key={node.id}
          position={[node.x, node.y]}
        />
      ))}
    </div>
  );
};

export default BinarySearchTree;
