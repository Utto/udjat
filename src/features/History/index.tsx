import { Drawer } from '@material-ui/core';

type Props = {
  isOpen: boolean,
  handleClose: () => void,
}

const History = ({ isOpen, handleClose }: Props) => {
  console.log('history');
  return (
    <Drawer
      anchor="right"
      open={isOpen}
      onClose={handleClose}
    >
      foo bar baz bazzzzzz
    </Drawer>
  );
};

export default History;
