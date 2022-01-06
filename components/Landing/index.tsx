import EmployeeList from '../common/EmployeeList';
import * as Local from './styles';
import DisplaySearch from '../common/DisplaySearch';

interface Props {
  employees: {};
}

const Landing: React.FC<Props> = ({ employees }) => {
  return (
    <>
      <h3 style={{ textAlign: 'center' }}>
        Note: the data is fetched dynamically from the library{' '}
        <span style={{ color: 'salmon' }}>faker</span>.
      </h3>
      <Local.Container className="container">
        <Local.SubContainer className="container-sub">
          <DisplaySearch placeholder={'Search by Name'} />
          {/* <DisplaySearch placeholder={'Search by Tags'} tags/> */}
          <EmployeeList employees={employees} />
        </Local.SubContainer>
      </Local.Container>
    </>
  );
};

export default Landing;
