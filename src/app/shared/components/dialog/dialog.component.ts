import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogErrorComponent } from '../dialog-error/dialog-error.component';
import { DialogSuccessComponent } from '../dialog-success/dialog-success.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  
  constructor(public dialog: MatDialog) { }

  public openDialogError() {
    this.dialog.open(DialogErrorComponent);
  }

  public openDialogSucces() {
    this.dialog.open(DialogSuccessComponent);
  }

}
