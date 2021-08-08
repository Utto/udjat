import { ReactNode } from 'react';
import { makeStyles } from '@material-ui/styles';

import baseStyles from '../../../theming/baseStyle';

const useBaseStyles = makeStyles(baseStyles);

type Props = {
  children: ReactNode;
};

const App: React.FC<Props> = ({ children }) => {
  useBaseStyles();
  return (
    <div className="app">
      {children}
    </div>
  );
};

export default App;
