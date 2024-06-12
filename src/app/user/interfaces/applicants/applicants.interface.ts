import { ProfessionResponseInterface } from "../professions/professions.interface";

export interface ApplicantsInterface {
  names: string;
  last_names: string;
  genre: string;
  ci: Int16Array;
  cellphone: Int16Array;
  address: string;
  birthdate: Date;
  curriculum: string;
  profession: ProfessionResponseInterface
}
