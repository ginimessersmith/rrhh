import { Component, Input } from '@angular/core';
import { RequestInterface } from 'src/app/user/interfaces/app/request.interface';

@Component({
  selector: 'app-all-request-app',
  templateUrl: './all-request-app.component.html',
  styleUrls: ['./all-request-app.component.css']
})
export class AllRequestAppComponent {

  @Input() allRequest!:RequestInterface[]
  displayColumns:string[] =[
    'emailPostulant',
    'namePostulant',
    'curriculumVitae',
    'score',
    'success_percentage',
    'opinion'
  ]

}
