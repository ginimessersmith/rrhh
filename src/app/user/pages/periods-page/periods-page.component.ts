import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PeriodsService } from '../../services/periods.service';
import { PeriodsInterface } from '../../interfaces/periods/periods';

@Component({
  selector: 'app-periods-page',
  templateUrl: './periods-page.component.html',
  styleUrls: ['./periods-page.component.css']
})
export class PeriodsPageComponent implements OnInit {
  public viewListPeriods = true
  public allPeriods!: PeriodsInterface[]

  constructor(
    private periodsService: PeriodsService,
  ) { }

  ngOnInit(): void {
    const viewList = localStorage.getItem('viewListPeriods')
    if (viewList) this.viewListPeriods = JSON.parse(viewList)
    this.findAllPeriods()
  }

  changeSlideToggle() {
    this.viewListPeriods = !this.viewListPeriods
    localStorage.setItem('viewListPeriods', JSON.stringify(this.viewListPeriods))
  }


  findAllPeriods() {
    this.periodsService.findAllPeriods()
      .subscribe({
        next: (resp) => {
          this.allPeriods = resp
        },
        error: (err) => {
          console.log({ err })
        }
      })
  }

  changePeriods(newValue: PeriodsInterface[]) {
    this.allPeriods = newValue
  }


}
