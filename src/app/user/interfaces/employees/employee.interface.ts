import { ProfessionResponseInterface } from "../professions/professions.interface";

export interface EmployeeResponseInterface {
  id: string;
  names: string;
  last_names: string;
  genre: string;
  ci: number;
  cellphone: number;
  address: string;
  birthdate: string;
  code: string;
  profession: ProfessionResponseInterface;
}
