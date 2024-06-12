import { ApplicantsInterface } from "../applicants/applicants.interface";
import { VacanciesInterface } from "../vacancies/vacancies.interface";

export interface ApplicationsInterface{
  id: string;
  status: boolean;
  applicant: ApplicantsInterface
  vacancy: VacanciesInterface
}
