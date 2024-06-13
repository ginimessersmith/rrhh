import { Component, OnInit } from '@angular/core';
import { UserInterface } from '../../interfaces/users/user.interface';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  public allUsers!:UserInterface[]

  ngOnInit(): void {
    this.findAllUsers()
  }

  constructor(
    private userService:UserService
  ) {}

  findAllUsers(){
    this.userService.findAllUsers()
    .subscribe({
      next:(res)=>{
        this.allUsers = res
      },
      error:(err)=>{
        console.log({err})
      }
    })
  }

}
