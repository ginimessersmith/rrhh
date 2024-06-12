import { Position } from "../deductions/contract.interface"

export interface VacanciesInterface {
  id: string
  title: string
  description: string
  start_date: Date
  end_date: Date
  position: Position
}
