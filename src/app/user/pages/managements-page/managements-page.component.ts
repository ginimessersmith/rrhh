import { Component, OnInit } from '@angular/core';
import { ManagementInterface } from '../../interfaces/managements/management.interface';
import { ManagementService } from '../../services/management.service';

@Component({
  selector: 'app-managements-page',
  templateUrl: './managements-page.component.html',
  styleUrls: ['./managements-page.component.css']
})
export class ManagementsPageComponent implements OnInit{
  public allManagement!:ManagementInterface[]
  public isListManagement:boolean = true

  constructor(
    private managementService:ManagementService,
  ){}

  ngOnInit(): void {
    const isList = localStorage.getItem('isListManagement')
    // if()
    this.findAllManagement()
  }

  findAllManagement(){
    this.managementService.allManagement()
    .subscribe({
      next:(resp)=>{
        this.allManagement=resp
      },
      error:(err)=>{
        console.log({err})
      }
    })
  }

  changeSlideToggle(){
    this.isListManagement = !this.isListManagement
  }

}
