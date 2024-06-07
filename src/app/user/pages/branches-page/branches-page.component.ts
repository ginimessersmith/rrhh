import { Component } from '@angular/core';
import { BranchService } from '../../services/branch.service';

@Component({
  selector: 'app-branches-page',
  templateUrl: './branches-page.component.html',
  styleUrls: ['./branches-page.component.css']
})
export class BranchesPageComponent {

  public isCreateBranch:boolean = false
  public isAllBranch:boolean = true

  constructor(
    private BranchService:BranchService
  ){}

  createBranch(){
    this.isCreateBranch = true
    this.isAllBranch = false
  }
  allBranch(){
    this.isCreateBranch = false
    this.isAllBranch = true
  }
}
