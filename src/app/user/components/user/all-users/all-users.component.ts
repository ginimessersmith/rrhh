import { Component, Input } from '@angular/core';
import { UserInterface } from 'src/app/user/interfaces/users/user.interface';

@Component({
  selector: 'all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent {

  @Input() allUsers!:UserInterface[]
  displayColumns:string[] =[
    'email',
    'name',
    'genre',
    'ci',
    'cellphone',
    'address',
    'code',
    'profession'
  ]

}
