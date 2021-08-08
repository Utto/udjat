import { ReactNode, useState } from 'react';

import Form from '../../../features/StructureForm/components/Form';

type Props = {
  children: ReactNode;
};

const Page: React.FC<Props> = () => {
  const [list, setList] = useState([]);
  console.log(list);
  return (
    <div className="page">
      <Form handleChange={setList} />
    </div>
  );
};

export default Page;
