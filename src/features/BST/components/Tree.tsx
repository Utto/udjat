import { makeStyles } from '@material-ui/styles';

import { StructureValue } from 'types/structure';

import { initBST } from '../utils/convertToBst';
import { getPositionedNodes } from '../utils/tree';

import Node from './Node';

type Props = {
  list: StructureValue,
}

const useStyles = makeStyles({
  container: {
    position: 'relative',
    marginTop: '20px',
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
