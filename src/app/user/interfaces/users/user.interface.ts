export interface UserInterface {
  id:       string;
  email:    string;
  pass:     string;
  employee: Employee;
  status:   boolean;
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
