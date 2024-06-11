import { Employee } from "../deductions/contract.interface";

export interface AttendancesInterface{
  date: Date;
  status: boolean;
  observation: string;
  employee: Employee
}
