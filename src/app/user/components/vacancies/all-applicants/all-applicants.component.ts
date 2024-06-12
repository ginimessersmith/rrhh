import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ApplicantsInterface } from 'src/app/user/interfaces/applicants/applicants.interface';

@Component({
  selector: 'user-vacancies-all-applicants',
  templateUrl: './all-applicants.component.html',
  styleUrls: ['./all-applicants.component.css']
})
export class AllApplicantsComponent {

  @Input() allApplicants!: ApplicantsInterface[]
  @Input() viewList!: boolean

  public idApplicant!:string
  @Output() idApplicantEmit = new EventEmitter<string>()

  displayedColumns: string[] = ['name', 'cellphone', 'profession', 'curriculum'];

  constructor(){}

  sendIdApplicant(id:string){
    this.idApplicant = id
    this.emitIdApplicant()
  }

  emitIdApplicant(){
    this.idApplicantEmit.emit(this.idApplicant)
  }

  downloadFile(url: string | undefined) {
    if (!url) {
      console.error('URL is undefined');
      return;
    }

    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.download = url.split('/').pop() ?? 'download'; // Extrae el nombre del archivo de la URL o usa 'download' por defecto
    link.click();
  }

}
