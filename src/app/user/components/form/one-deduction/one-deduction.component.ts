import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProfessionsPageComponent } from '../../../pages/professions-page/professions-page.component';
import { Router } from '@angular/router';
import { flatMap } from 'rxjs';
import { DeductionsService } from '../../../services/deductions.service';
import { DeductionInterface } from 'src/app/user/interfaces/deductions/deduction.interface';

@Component({
  selector: 'user-form-one-deduction',
  templateUrl: './one-deduction.component.html',
  styleUrls: ['./one-deduction.component.css']
})
export class OneDeductionComponent implements OnInit {

  @Input() idDeduction!: string
  @Output() viewOneDeductionEmit = new EventEmitter<boolean>()

  @Input() deduction!: DeductionInterface
  public viewOneDeduction: boolean = false

  constructor(
  ) { }

  ngOnInit(): void {
    const oneDeductionLocal = localStorage.getItem('oneDeduction')
    if(oneDeductionLocal) this.deduction = JSON.parse(oneDeductionLocal)
  }

  emitValue() {
    this.viewOneDeductionEmit.emit(this.viewOneDeduction)
  }



}
