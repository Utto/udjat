import React from 'react';
import { makeStyles } from '@material-ui/styles';

type Props = {
  position: number[],
  value: number,
};

const useStyles = makeStyles({
  node: {
    position: 'absolute',
    width: '50px',
    height: '50px',
    background: '#fff',
    borderRadius: '100%',
    border: '1px solid black',
    fontWeight: 600,
    textAlign: 'center',
    lineHeight: '50px',
    cursor: 'pointer',
    userSelect: 'none',

    '&:hover': {
      background: '#C3EBFA',
      transition: 'all 0.5s ease',
    },
  },
});

const StructureNode: React.FC<Props> = ({ position, value }) => {
  const [left, top] = position;
  const style = { left, top };
  const classes = useStyles();
  return (
    <div className={classes.node} style={style}>
      {value}
    </div>
  );
};

export default StructureNode;
