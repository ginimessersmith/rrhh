export interface PositionInterface {
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
