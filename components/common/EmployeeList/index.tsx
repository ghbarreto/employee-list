import _ from 'lodash';
import Image from 'next/image';
import type { NextPage } from 'next';
import { GoPlus } from 'react-icons/go';
import { BiMinus } from 'react-icons/bi';
import { useContext, useEffect, useState } from 'react';

import { Employee } from '../../../types';
import * as Local from './styles';
import * as Reusable from '../DisplaySearch/styles';
import DisplayInformation from '../DisplayInformation';
import DisplayTest from '../DisplayTest';
import { EmployeeContext } from '../../../context/EmployeeContext';

interface Props {
  employees: Employee;
}

const EmployeeList: NextPage<Props> = () => {
  const { displayTests, handleDisplayTests, employees, addTags } =
    useContext(EmployeeContext);
  const [inputValue, setInputValue] = useState<any>({
    id: '',
    value: '',
  });

  const onChangeValue = (
    id: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    return setInputValue({ id: id, value: e.target.value });
  };

  const displayEmployeesCard = () => {
    if (Object.keys(employees).length < 0)
      return <div>No employees found.</div>;

    return _.map(employees, (emp: Employee, index: number) => {
      if (!emp) return;
      const checkValidity =
        displayTests.id === index && displayTests.opened === true;
      return (
        <>
          <Local.Container key={index}>
            <div className="information-container">
              <Image
                src={emp.pic}
                placeholder="blur"
                blurDataURL={`/_next/image?url=${emp.pic}&w=16&q=1`}
                alt={emp.firstName}
                width={180}
                height={180}
                layout="fixed"
              />
              <div className="information-container-sub">
                <h1>
                  {emp.firstName} {emp.lastName}
                </h1>
                <div>
                  <DisplayInformation
                    email={emp.email}
                    company={emp.company}
                    skill={emp.skill}
                    average={emp.grades}
                  />
                    {checkValidity && <DisplayTest grades={emp.grades} />}
                  <Local.Tags>
                    {emp.tags &&
                      emp.tags.map((v, index) => <span key={index}>{v}</span>)}
                  </Local.Tags>
                  <Reusable.Input
                    placeholder={'Add a Tag'}
                    onKeyPress={(e: any) => {
                      if (e.key === 'Enter') {
                        addTags(emp.id, e.target.value);
                        setInputValue('');
                      }
                    }}
                    value={emp.id === inputValue.id ? inputValue.value : ''}
                    onChange={e => onChangeValue(emp.id, e)}
                  />
                </div>
              </div>
            </div>

            <div>
              {checkValidity ? (
                <BiMinus
                  onClick={() => handleDisplayTests(index, false)}
                  size={30}
                  style={{ marginRight: 30, marginTop: 30, color: 'grey' }}
                />
              ) : (
                <GoPlus
                  onClick={() => handleDisplayTests(index, true)}
                  size={30}
                  style={{ marginRight: 30, marginTop: 30, color: 'grey' }}
                />
              )}
            </div>
          </Local.Container>
        </>
      );
    });
  };

  return <div>{displayEmployeesCard()}</div>;
};

export default EmployeeList;
