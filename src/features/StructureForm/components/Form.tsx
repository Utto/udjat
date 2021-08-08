import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import { SelectChangeEvent } from '@material-ui/core/Select';

import StructureTypeSelect from './TypeSelect';

type Props = {
  handleChange: (tree: any) => void,
};

type setStateFn = (value: string) => void;

const useStyles = makeStyles({
  container: {
    display: 'flex',
  },
});

const StructureInput: React.FC<Props> = ({ handleChange }) => {
  const [type, setType] = useState('');
  const classes = useStyles();

  const onChange = (fn: setStateFn) => (e: SelectChangeEvent) => {
    fn(e.target.value as string);
  };

  const onClick = () => handleChange([]);

  const onChangeType = onChange(setType);

  return (
    <div className={classes.container}>
      <StructureTypeSelect value={type} onChange={onChangeType} />

      <Button
        variant="contained"
        color="primary"
        onClick={onClick}
      >
        Go!
      </Button>
    </div>
  );
};

export default StructureInput;
