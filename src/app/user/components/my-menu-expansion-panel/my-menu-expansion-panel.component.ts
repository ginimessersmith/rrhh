import { Component } from '@angular/core';
import { ListExpansionPanel } from '../../utils/list-expansionPanel';
import { Router } from '@angular/router';

@Component({
  selector: 'user-my-menu-expansion-panel',
  templateUrl: './my-menu-expansion-panel.component.html',
  styleUrls: ['./my-menu-expansion-panel.component.css']
})
export class MyMenuExpansionPanelComponent {

  public list = ListExpansionPanel

  constructor(
    private router: Router
  ) { }

  goToRoute(route: string) {
    console.log({route})
    this.router.navigateByUrl(route)
  }
}
