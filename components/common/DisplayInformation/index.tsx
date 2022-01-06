import _ from 'lodash';

import * as Local from './styles'

interface Props {
  email?: string;
  company?: string;
  skill?: string;
  average?: Array<string>;
}

const DisplayInformation: React.FC<Props> = ({
  email,
  company,
  skill,
  average,
}) => {

  const getTheAverage = () => {
    const transformedArray = _.map(average, (avg) => _.toNumber(avg))
    return _.mean(transformedArray)
  }

  return (
    <Local.Style>
      <div>Email: {email}</div>
      <div>Company: {company}</div>
      <div>Skill: {skill}</div>
      <div>Average: {getTheAverage()} %</div>
    </Local.Style>
  );
};

export default DisplayInformation;
