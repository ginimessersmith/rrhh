import { Component, OnInit } from '@angular/core';
import { AttendancesInterface } from '../../interfaces/attendances/attendances.interface';
import { AttendancesService } from '../../services/attendances.service';
import { EmployeeResponseInterface } from '../../interfaces/employees/employee.interface';
import { EmployeeService } from '../../services/employees.service';

@Component({
  selector: 'app-attendances-page',
  templateUrl: './attendances-page.component.html',
  styleUrls: ['./attendances-page.component.css']
})
export class AttendancesPageComponent implements OnInit{
  public viewList: boolean = true
  public viewOneAttendance: boolean = false
  public allEmployees!: EmployeeResponseInterface[]
  public allAttendances!: AttendancesInterface[]
  public attendance!: AttendancesInterface
  public idAttendance!: string

  constructor(
    private employeesService: EmployeeService,
    private attendancesService: AttendancesService,
  ){}

  ngOnInit(): void {
    const viewListLocal = localStorage.getItem('viewListAttendances');
    const viewOneAttendanceLocal = localStorage.getItem('viewOneAttendanceLocal');
    if(viewOneAttendanceLocal) this.viewOneAttendance = JSON.parse(viewOneAttendanceLocal)
    if(viewListLocal) this.viewList = JSON.parse(viewListLocal)

    this.findAllAttendances()
    this.findAllEmployees()
  }

  findAllEmployees(){
    this.employeesService.getAllEmployees()
    .subscribe({
      next: (resp)=>{
        this.allEmployees = resp
      },
      error: (err)=>{
        console.log({err})
      }
    })
  }

  findAllAttendances(){
    this.attendancesService.getAllAttendances()
    .subscribe({
      next: (resp)=>{
        this.allAttendances = resp
      },
      error: (err)=>{
        console.log({err})
      }
    })
  }

  changeSlideToggle(){
    this.viewList = !this.viewList
    localStorage.setItem('viewLIstContracts', JSON.stringify(this.viewList))
  }

  changeIdAttendance(id: string){
    this.idAttendance = id
    this.viewOneAttendance = !this.viewOneAttendance
    this.oneAttendance()
    localStorage.setItem('viewOneAttendance', JSON.stringify(this.viewOneAttendance))
  }

  changeViewOneAttendance(newValue: boolean){
    console.log({newValue})
    this.viewOneAttendance = newValue
    localStorage.setItem('viewOneAttendance', JSON.stringify(this.viewOneAttendance))
  }

  oneAttendance(){
    this.attendancesService.oneAttendance(this.idAttendance)
      .subscribe({
        next: (resp)=>{
          this.attendance = resp
          localStorage.setItem('oneAttendance', JSON.stringify(this.attendance))
          console.log({ resp })
        },
        error: (err)=>{
          console.log({ err })
        }
      })
  }

  changeAllAttendances(attendances: AttendancesInterface[]){
    this.allAttendances = attendances
    console.log({ attendances })
  }
}
