import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const App: React.FC<Props> = ({ children }) => (
  <div className="app">
    {children}
  </div>
);

export default App;
