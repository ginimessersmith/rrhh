import { Component, OnInit } from '@angular/core';
import { PositionService } from '../../services/position.service';
import { DepartmentBranchService } from '../../services/department-branch.service';
import { DepartmentBranchInterface } from '../../interfaces/departments-branches/department-branch.interface';
import { PositionInterface } from '../../interfaces/positions/Position.interface';


@Component({
  selector: 'app-positions-page',
  templateUrl: './positions-page.component.html',
  styleUrls: ['./positions-page.component.css']
})
export class PositionsPageComponent implements OnInit {

  public isList: boolean = true
  public allDepartmentBranch!: DepartmentBranchInterface[]
  public AllPositions!: PositionInterface[]
  constructor(
    private positionService: PositionService,
    private departmentBranchService: DepartmentBranchService
  ) { }
  ngOnInit(): void {
    const isListLocal = localStorage.getItem('isListPosition')
    if (isListLocal) this.isList = JSON.parse(isListLocal)
    this.findAllDepBranch()
    this.findAllPosition()
  }

  findAllDepBranch() {
    this.departmentBranchService.allDepartmentsBranches()
      .subscribe({
        next: (resp) => {
          this.allDepartmentBranch = resp
        },
        error: (err) => {
          console.log({ err })
        }
      })
  }

  findAllPosition() {
    this.positionService.findAllPositions()
      .subscribe({
        next: (resp) => {
          this.AllPositions = resp
        },
        error: (err) => {
          console.log({ err })
        }
      })
  }

  changeAllPosition(newValue: PositionInterface[]) {
    this.AllPositions = newValue
  }

  changeSlideToggle() {
    this.isList = !this.isList
    localStorage.setItem('isListPosition', JSON.stringify(this.isList))
  }

}
