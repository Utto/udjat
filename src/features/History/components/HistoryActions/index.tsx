import { useState } from 'react';
import { Tooltip, IconButton } from '@material-ui/core';
import {
  ExpandMore,
  ExpandLess,
} from '@material-ui/icons';

import Color from 'types/color';

type Action = {
  title: string,
  Icon: typeof ExpandMore, // deriving MUI icon type
  color?: Color,
  fn: () => void,
}

const HistoryActions: React.FC<{ actions: Action[] }> = ({ actions }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);
  const PrimaryIcon = isOpen ? ExpandLess : ExpandMore;
  return (
    <>
      <Tooltip title="Actions" placement="left">
        <IconButton aria-label="delete" size="small" onClick={handleClick}>
          <PrimaryIcon fontSize="inherit" />
        </IconButton>
      </Tooltip>
      {isOpen && (
        <>
          {actions.map(({
            title,
            Icon,
            color,
            fn,
          }) => (
            <Tooltip title={title} key={title} placement="left">
              <IconButton aria-label={title} size="small" onClick={fn}>
                <Icon fontSize="inherit" color={color} />
              </IconButton>
            </Tooltip>
          ))}
        </>
      )}
    </>
  );
};

export default HistoryActions;
