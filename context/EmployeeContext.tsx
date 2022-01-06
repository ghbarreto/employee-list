import { createContext, useState, useEffect } from 'react';
import _ from 'lodash';
import { Employee } from '../types';
import { students } from '../utils/students';

interface Props {
  children: React.ReactChild;
}

interface EmployeeContextReturn {
  employees: {};
  fetchEmployees: () => void;
  displayTests: DisplayTests;
  handleDisplayTests: (e: string | string, val: boolean) => void;
  handleFilterName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  filterName: string | number | readonly string[] | undefined;
  addTags: (id: string, tag: string[]) => void;
  handleFilterTags: (e: React.ChangeEvent<HTMLInputElement>) => void;
  filterTags: string | number | readonly string[] | undefined;
}

interface Emp {
  students: Employee;
}

interface DisplayTests {
  id: string | number;
  opened: boolean;
}

export const EmployeeContext = createContext<EmployeeContextReturn>(
  {} as EmployeeContextReturn
);

export const EmployeeContextProvider: React.FC<Props> = ({
  children,
}: Props) => {
  const url = 'https://api.hatchways.io/assessment/students';
  const [employees, setEmployees] = useState<Object>([]);
  const [displayTests, setDisplayTests] = useState<DisplayTests>({
    id: '',
    opened: false,
  });
  const [filterName, setFilterName] = useState<
    string | number | readonly string[] | undefined
  >('');
  const [filterTags, setFilterTags] = useState<
    string | number | readonly string[] | undefined
  >();
  const fetchEmployees = async () => {
    return _.map(students(), v => {
      return setEmployees((e: any) => [...e, v]);
    });
  };

  const handleFilterTags = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setFilterTags(e.target.value);
  };

  const addTags = (id: string, tag: string[]) => {
    return setEmployees((employees: any) =>
      employees.map((e: Employee) =>
        e.id === id ? { ...e, tags: [...(e?.tags || ''), tag] } : e
      )
    );
  };

  const handleFilterName = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setFilterName(e.target.value);
  };

  const handleDisplayTests = (e: string | string, val: boolean) => {
    return setDisplayTests({ id: e, opened: val });
  };

  return (
    <EmployeeContext.Provider
      value={{
        employees: _.map(employees, (e: Employee) => {
          const nameFilter = e.firstName
            .toLowerCase()
            .indexOf(filterName?.toString().toLowerCase());
          const surNameFilter = e.lastName
            .toLowerCase()
            .indexOf(filterName?.toString().toLowerCase());

          const checkTags = e.tags && e.tags.map(v => v.toLowerCase());
          const filteredTags =
            e.tags && checkTags.indexOf(filterTags?.toString().toLowerCase());

          return !nameFilter || !surNameFilter ? e : null;
        }),
        fetchEmployees,
        displayTests,
        handleDisplayTests,
        handleFilterName,
        filterName,
        addTags,
        handleFilterTags,
        filterTags,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};
