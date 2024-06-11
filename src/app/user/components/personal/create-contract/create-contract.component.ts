import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContractsService } from 'src/app/user/services/contracts.service';
import { ContractInterface } from 'src/app/user/interfaces/deductions/contract.interface';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ContractTypesInterface } from 'src/app/user/interfaces/contract-types/contract-types.interface';
import { PositionInterface } from 'src/app/user/interfaces/positions/Position.interface';
import { EmployeeResponseInterface } from 'src/app/user/interfaces/employees/employee.interface';

@Component({
  selector: 'user-personal-create-contract',
  templateUrl: './create-contract.component.html',
  styleUrls: ['./create-contract.component.css']
})
export class CreateContractComponent {

  public Dialog = new DialogComponent(this.dialog);
  @Input() allContractTypes!: ContractTypesInterface[];
  @Input() allPositions!: PositionInterface[];
  @Input() allEmployees!: EmployeeResponseInterface[];
  @Input() allContracts!: ContractInterface[];
  @Output() allContractsEmit = new EventEmitter<ContractInterface[]>();

  public createContractForm: FormGroup = this.formBuilder.group({
    employeeId: ['', Validators.required],
    contractTypeId: ['', Validators.required],
    positionId: ['', Validators.required],
    start_date: ['', Validators.required],
    end_date: ['', Validators.required],
    base_salary: [2500, Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private contractsService: ContractsService,
    private dialog: MatDialog
  ) { }

  onCreateContract() {
    if (this.createContractForm.invalid) {
      return;
    }

    const formData = this.createContractForm.value;
    const createContract: ContractInterface = {
      ...formData,
      start_date: this.formatDate(formData.start_date),
      end_date: this.formatDate(formData.end_date)
    };

    this.contractsService.createContract(createContract).subscribe({
      next: () => {
        this.findAllContracts();
        this.Dialog.openDialogSucces();
      },
      error: (err) => {
        this.Dialog.openDialogError();
        console.error(err);
      }
    });
  }

  findAllContracts() {
    this.contractsService.getAllContracts().subscribe({
      next: (resp) => {
        this.allContracts = resp;
        this.emitContracts();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  emitContracts() {
    this.allContractsEmit.emit(this.allContracts);
  }

  private formatDate(date: any): string {
    if (!(date instanceof Date)) {
      date = new Date(date);
    }
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }
}
