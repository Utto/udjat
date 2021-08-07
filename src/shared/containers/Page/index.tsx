import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Page: React.FC<Props> = () => (
  <div className="page">
    Test page
  </div>
);

export default Page;
