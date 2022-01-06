import _ from 'lodash';
import * as Reused from '../DisplayInformation/styles'

interface Props {
  grades?: Array<string>;
}

const DisplayText: React.FC<Props> = ({ grades }) => {
  return (
    <Reused.Style marginTop={'20px'}>
      {_.map(grades, (grade, index) => (
        <div>
          Test {index + 1}
          <span>
             {grade}%
          </span>
        </div>
      ))}
    </Reused.Style>
  );
};

export default DisplayText;
