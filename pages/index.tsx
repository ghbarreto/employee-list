import type { NextPage } from 'next'
import { useContext, useEffect } from 'react';
import { EmployeeContext } from '../context/EmployeeContext';

import Landing from '../components/Landing'

const Home: NextPage = () => {
  const { fetchEmployees, employees } = useContext(EmployeeContext);
  useEffect(() => {
    fetchEmployees()
  }, [])

  return employees ? <Landing employees={employees} /> : <div>Fetching Employees</div>
}

export default Home
