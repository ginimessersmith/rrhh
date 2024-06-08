import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BranchService } from '../../../services/branch.service';
import { BranchResponseInterface } from 'src/app/user/interfaces/branches/branch.interface';

@Component({
  selector: 'user-enterprise-all-branch',
  templateUrl: './all-branch.component.html',
  styleUrls: ['./all-branch.component.css']
})
export class AllBranchComponent implements OnInit {

  public allBranches!: BranchResponseInterface[]
  displayedColumns: string[] = ['branch'];

  constructor(
    private router: Router,
    private branchService: BranchService
  ) { }

  ngOnInit(): void {
    this.allBranchesService()
  }

  allBranchesService(){
    this.branchService.allBranch().subscribe({
      next:(res)=>{
        this.allBranches = res

      },
      error:(err)=>{
        console.log({err})
      }
    })
  }

}
