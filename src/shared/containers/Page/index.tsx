import { ReactNode, useState } from 'react';

import Form from '../../../features/StructureForm/components/Form';
import BST from '../../../features/BST/components/Tree';

type Props = {
  children: ReactNode;
};

const Page: React.FC<Props> = () => {
  const [list, setList] = useState([]);
  return (
    <div className="page">
      <Form handleChange={setList} />
      <BST list={list} />
    </div>
  );
};

export default Page;
