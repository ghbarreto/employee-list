export interface Employee {
  city: string;
  company: string;
  email: string;
  firstName: string;
  grades: Array<string>;
  id: string;
  lastName: string;
  pic: string;
  skill: string;
  tags?: string[] | string | any
}

export interface EmployeeAPI extends Employee {
  students: Employee
}
