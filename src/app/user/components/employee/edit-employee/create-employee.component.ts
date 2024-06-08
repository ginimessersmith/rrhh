import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateEmployeeInterface } from 'src/app/user/interfaces/employees/create-employee.interface';
import { EmployeeService } from 'src/app/user/services/employees.service';
import { ProfessionService } from 'src/app/user/services/profession.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'user-employee-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit{

  createEmployee: boolean = false;
  allEmployee: boolean = true;
  editEmployee: boolean = false;
  professions: any[] = [];

  @Output() createEmployeeEmit = new EventEmitter<boolean>();
  @Output() allEmployeeEmit = new EventEmitter<boolean>();
  @Output() editEmployeeEmit = new EventEmitter<boolean>();

  public createEmployeeForm: FormGroup = this.formBuilder.group({
    names: ['', [Validators.required, Validators.minLength(2)], []],
    last_names: ['', [Validators.required, Validators.minLength(2)], []],
    genre: ['', [Validators.required],[]],
    ci: ['', [Validators.required, Validators.minLength(7)], []],
    cellphone: ['', [Validators.required, Validators.minLength(8)], []],
    address: ['', [Validators.required, Validators.minLength(5)],[]],
    birthdate: ['', [Validators.required], []],
    code: [''],
    professionId: ['', [Validators.required]]
  })

  constructor(
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService,
    private professionService: ProfessionService,
    private cdr: ChangeDetectorRef
  ){}

  ngOnInit(): void {
      this.loadProfessions();
      this.cdr.detectChanges();
  }

  loadProfessions(): void {
    this.professionService.getAllProfessions().subscribe(
      data =>{
        this.professions = data;
        console.log(this.professions);
      },
      error =>{
        console.error('Error fetching professions', error);
      }
    )
  }
  onCreate(){
    const createEmployeeInterface: CreateEmployeeInterface = {
      ...this.createEmployeeForm.value
    }
    this.employeeService.createEmployee(createEmployeeInterface)
    .subscribe({
      next: (res)=>{
        this.emitValues()
        Swal.fire('', 'Empleado Registrado', 'success');
      },
      error: (err)=>{
        Swal.fire('', 'Ocurrió un error al registrar el empleado', 'error');
      }
    })
  }

  emitValues(){
    this.createEmployeeEmit.emit(this.createEmployee);
    this.allEmployeeEmit.emit(this.allEmployee);
    this.editEmployeeEmit.emit(this.editEmployee);
  }
}
