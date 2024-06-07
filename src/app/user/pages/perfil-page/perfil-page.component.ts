import { Component, OnInit } from '@angular/core';
import { LoginResponseInterface } from 'src/app/auth/interfaces';

@Component({
  selector: 'app-perfil-page',
  templateUrl: './perfil-page.component.html',
  styleUrls: ['./perfil-page.component.css']
})
export class PerfilPageComponent implements OnInit {
  public userData!:LoginResponseInterface

  ngOnInit(): void {
    this.userData = this.restoreUserData()
  }

  restoreUserData():LoginResponseInterface{
    const userLocal = localStorage.getItem('userData')
    return JSON.parse(userLocal!)
  }

}
