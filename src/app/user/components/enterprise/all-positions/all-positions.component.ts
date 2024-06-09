import { Component, Input } from '@angular/core';
import { PositionInterface } from '../../../interfaces/positions/Position.interface';

@Component({
  selector: 'user-enterprise-all-positions',
  templateUrl: './all-positions.component.html',
  styleUrls: ['./all-positions.component.css']
})
export class AllPositionsComponent {
  @Input() isListPosition!: boolean
  @Input() allPosition!: PositionInterface[]
  displayedColumns: string[] = ['position', 'department', 'branch']

}
