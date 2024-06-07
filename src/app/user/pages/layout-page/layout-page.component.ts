import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { listSideBarItems } from '../../utils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css']
})
export class LayoutPageComponent {
  public sideBarItems = listSideBarItems
  constructor(
    private router:Router
  ){}

  logout(){
    localStorage.clear()
    this.router.navigateByUrl('/dashboard')
  }
}
