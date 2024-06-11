import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AttendancesInterface } from 'src/app/user/interfaces/attendances/attendances.interface';

@Component({
  selector: 'user-personal-all-attendances',
  templateUrl: './all-attendances.component.html',
  styleUrls: ['./all-attendances.component.css']
})
export class AllAttendancesComponent {

  @Input() allAttendances!: AttendancesInterface[]
  @Input() viewList!: boolean

  public idAttendance!:string
  @Output() idAttendanceEmit = new EventEmitter<string>()

  public displayColumns: string[] = [
    'employee',
    'date',
    'status',
    'observation'
  ]

  constructor(){}

  sendIdAttendance(id:string){
    this.idAttendance = id
    this.emitIdAttendance()
  }

  emitIdAttendance(){
    this.idAttendanceEmit.emit(this.idAttendance)
  }

}
