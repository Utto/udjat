import { Drawer } from '@material-ui/core';

import HistoryBlock from './components/HistoryBlock';

import { HistoryItem } from './types';

type Props = {
  list: HistoryItem[],
  isOpen: boolean,
  handleClose: () => void,
}

const History: React.FC<Props> = ({ list, isOpen, handleClose }) => (
  <Drawer
    anchor="right"
    open={isOpen}
    onClose={handleClose}
  >
    {list.map((item) => (
      <HistoryBlock key={item.createdDate} item={item} />
    ))}
  </Drawer>
);

export default History;
