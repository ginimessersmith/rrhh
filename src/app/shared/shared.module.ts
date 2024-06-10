import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DialogErrorComponent } from './components/dialog-error/dialog-error.component';
import { DialogSuccessComponent } from './components/dialog-success/dialog-success.component';
import { MaterialModule } from '../material/material.module';
import { DialogComponent } from './components/dialog/dialog.component';



@NgModule({
  declarations: [
    SidenavComponent,
    DialogErrorComponent,
    DialogSuccessComponent,
    DialogComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialModule,
  ]
})
export class SharedModule { }
