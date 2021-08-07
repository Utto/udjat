import { ReactNode } from 'react';
import { createUseStyles } from 'react-jss';

import baseStyle from '../../../jss/baseStyle';

const useStyles = createUseStyles(baseStyle, { name: 'Global-Base' });

type Props = {
  children: ReactNode;
};

const App: React.FC<Props> = ({ children }) => {
  useStyles();
  return (
    <div className="app">
      {children}
    </div>
  );
};

export default App;
