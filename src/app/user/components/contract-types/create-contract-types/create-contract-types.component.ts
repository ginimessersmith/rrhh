import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateContractTypesInterface } from 'src/app/user/interfaces/contract-types/create-contract-types.interface';
import { ContractTypesService } from 'src/app/user/services/contract-types.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'user-contract-types-create-contract-types',
  templateUrl: './create-contract-types.component.html',
  styleUrls: ['./create-contract-types.component.css']
})
export class CreateContractTypesComponent implements OnInit{

  createContractTypes: boolean = false;
  allContractTypes: boolean = true;

  @Output() createContractTypesEmit = new EventEmitter<boolean>();
  @Output() allContractTypesEmit = new EventEmitter<boolean>();

  public createContractTypeForm: FormGroup = this.formBuilder.group({
    type: ['', [Validators.required, Validators.minLength(3)], []],
  })

  constructor(
    private formBuilder: FormBuilder,
    private contractTypeService: ContractTypesService,
    private cdr: ChangeDetectorRef
  ){}

  ngOnInit(): void {
      this.cdr.detectChanges();
  }

  onCreate(){
    const createContractTypeInterface: CreateContractTypesInterface = {
      ...this.createContractTypeForm.value
    }
    this.contractTypeService.createContractType(createContractTypeInterface)
    .subscribe({
      next: (res)=>{
        this.emitValues()
        Swal.fire('', 'Tipo de Contrato Registrado', 'success');
      },
      error: (err)=>{
        Swal.fire('', 'Ocurrió un error al registrar el tipo de contrato', 'error');
      }
    })
  }

  emitValues(){
    this.createContractTypesEmit.emit(this.createContractTypes);
    this.allContractTypesEmit.emit(this.createContractTypes);
  }
}
