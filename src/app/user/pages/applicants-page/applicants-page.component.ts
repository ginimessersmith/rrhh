import { Component, OnInit } from '@angular/core';
import { ApplicantsInterface } from '../../interfaces/applicants/applicants.interface';
import { ApplicantsService } from '../../services/applicants.service';
import { ProfessionResponseInterface } from '../../interfaces/professions/professions.interface';
import { ProfessionService } from '../../services/profession.service';

@Component({
  selector: 'app-applicants-page',
  templateUrl: './applicants-page.component.html',
  styleUrls: ['./applicants-page.component.css']
})
export class ApplicantsPageComponent implements OnInit {
  public viewList: boolean = true
  public viewOneApplicant: boolean = false
  public allProfessions!: ProfessionResponseInterface[]
  public allApplicants!: ApplicantsInterface[]
  public applicant!: ApplicantsInterface
  public idApplicant!: string

  constructor(
    private professionsService: ProfessionService,
    private applicantsService: ApplicantsService,
  ){}

  ngOnInit(): void {
    const viewListLocal = localStorage.getItem('viewListApplicants');
    const viewOneApplicantLocal = localStorage.getItem('viewOneApplicantLocal');
    if(viewOneApplicantLocal) this.viewOneApplicant = JSON.parse(viewOneApplicantLocal)
    if(viewListLocal) this.viewList = JSON.parse(viewListLocal)

    this.findAllProfessions()
    this.findAllApplicants()
  }

  findAllProfessions(){
    this.professionsService.getAllProfessions()
    .subscribe({
      next: (resp)=>{
        this.allProfessions = resp
      },
      error: (err)=>{
        console.log({err})
      }
    })
  }

  findAllApplicants(){
    this.applicantsService.getAllApplicants()
    .subscribe({
      next: (resp)=>{
        this.allApplicants = resp
      },
      error: (err)=>{
        console.log({err})
      }
    })
  }

  changeSlideToggle(){
    this.viewList = !this.viewList
    localStorage.setItem('viewListApplicants', JSON.stringify(this.viewList))
  }

  changeIdApplicant(id: string){
    this.idApplicant = id
    this.viewOneApplicant = !this.viewOneApplicant
    this.oneApplicant()
    localStorage.setItem('viewOneApplicant', JSON.stringify(this.viewOneApplicant))
  }

  changeViewOneApplicant(newValue: boolean){
    console.log({newValue})
    this.viewOneApplicant = newValue
    localStorage.setItem('viewOneApplicant', JSON.stringify(this.viewOneApplicant))
  }

  oneApplicant(){
    this.applicantsService.oneApplicant(this.idApplicant)
      .subscribe({
        next: (resp)=>{
          this.applicant = resp
          localStorage.setItem('oneApplicant', JSON.stringify(this.applicant))
          console.log({ resp })
        },
        error: (err)=>{
          console.log({ err })
        }
      })
  }

  changeAllApplicants(applicants: ApplicantsInterface[]){
    this.allApplicants = applicants
    console.log({ applicants })
  }
}
