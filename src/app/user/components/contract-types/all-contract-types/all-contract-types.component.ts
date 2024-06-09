import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/user/services/employees.service';
import { EmployeeResponseInterface } from 'src/app/user/interfaces/employees/employee.interface';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Employee } from 'src/app/auth/interfaces';

@Component({
  selector: 'user-contract-types-all-contract-types',
  templateUrl: './all-contract-types.component.html',
  styleUrls: ['./all-contract-types.component.css']
})
export class AllContractTypesComponent implements OnInit{

  public allContractType!: EmployeeResponseInterface[];
  employee: Employee | undefined;

  displayedColumns: string[] = ['name', 'genre', 'ci', 'cellphone', 'profession', 'actions'];
  dataSource!: MatTableDataSource<Employee>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private router: Router,
    private employeeService: EmployeeService
  ){}

  ngOnInit(): void {
      this.allEmployeesService();
  }

  allEmployeesService(){
    this.employeeService.getAllEmployees().subscribe(
      data => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error => {
        console.error('Error fetching employees', error);
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getEmployeeById(id: string): void{
    this.employeeService.getEmployeeById(id).subscribe(
      data=>{
        this.employee = data;
      },
      error => {
        console.error('Error fetching employee by ID', error);
      }
    )
  }
}
