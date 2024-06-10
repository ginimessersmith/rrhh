export interface ContractInterface {
  id:           string;
  start_date:   Date;
  end_date:     Date;
  base_salary:  number;
  status:       boolean;
  employee:     Employee;
  position:     Position;
  contractType: ContractType;
}

export interface ContractType {
  id:   string;
  type: string;
}

export interface Employee {
  id:         string;
  names:      string;
  last_names: string;
  genre:      string;
  ci:         number;
  cellphone:  number;
  address:    string;
  birthdate:  Date;
  code:       string;
  profession: Profession;
}

export interface Profession {
  id:         string;
  profession: string;
}

export interface Position {
  id:               string;
  position:         string;
  departmentBranch: DepartmentBranch;
}

export interface DepartmentBranch {
  id:         string;
  department: Department;
  branch:     Branch;
}

export interface Branch {
  id:     string;
  branch: string;
}

export interface Department {
  id:         string;
  department: string;
}
