import { useContext } from 'react';

import * as Local from './styles';
import { EmployeeContext } from '../../../context/EmployeeContext';

interface Props {
  placeholder?: string;
  tags?: boolean;
}

const DisplaySearch: React.FC<Props> = ({ placeholder, tags }) => {
  const { filterName, handleFilterName, handleFilterTags, filterTags } =
    useContext(EmployeeContext);

  return (
    <Local.Container>
      <Local.Input
        placeholder={placeholder}
        onChange={tags ? handleFilterTags : handleFilterName}
        value={tags ? filterTags : filterName}
      />
    </Local.Container>
  );
};

export default DisplaySearch;
