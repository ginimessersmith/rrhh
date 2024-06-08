import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { PerfilPageComponent } from './pages/perfil-page/perfil-page.component';
import { ProfessionsPageComponent } from './pages/professions-page/professions-page.component';
import { ManagementsPageComponent } from './pages/managements-page/managements-page.component';
import { DepartmentsPageComponent } from './pages/departments-page/departments-page.component';
import { VacanciesPageComponent } from './pages/vacancies-page/vacancies-page.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MyPerfilComponent } from './components/my-perfil/my-perfil.component';
import { PeriodsPageComponent } from './pages/periods-page/periods-page.component';
import { ContractTypesPageComponent } from './pages/contract-types-page/contract-types-page.component';
import { BranchesPageComponent } from './pages/branches-page/branches-page.component';
import { DepartmentsBranchesPageComponent } from './pages/departments-branches-page/departments-branches-page.component';
import { PositionsPageComponent } from './pages/positions-page/positions-page.component';
import { ApplicantsPageComponent } from './pages/applicants-page/applicants-page.component';
import { EmployeesPageComponent } from './pages/employees-page/employees-page.component';
import { ApplicationsPageComponent } from './pages/applications-page/applications-page.component';
import { MyMenuExpansionPanelComponent } from './components/my-menu-expansion-panel/my-menu-expansion-panel.component';
import { CreateBranchComponent } from './components/enterprise/create-branch/create-branch.component';
import { AllBranchComponent } from './components/enterprise/all-branch/all-branch.component';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { CreateEmployeeComponent } from './components/employee/create-employee/create-employee.component';
import { CreateDepartmentComponent } from './components/enterprise/create-department/create-department.component';
import { AllDepartmentComponent } from './components/enterprise/all-department/all-department.component';
import { AllEmployeeComponent } from './components/employee/all-employee/all-employee.component';


@NgModule({
  declarations: [
    LayoutPageComponent,
    PerfilPageComponent,
    ProfessionsPageComponent,
    ManagementsPageComponent,
    DepartmentsPageComponent,
    VacanciesPageComponent,
    MyPerfilComponent,
    PeriodsPageComponent,
    ContractTypesPageComponent,
    BranchesPageComponent,
    DepartmentsBranchesPageComponent,
    PositionsPageComponent,
    ApplicantsPageComponent,
    EmployeesPageComponent,
    ApplicationsPageComponent,
    MyMenuExpansionPanelComponent,
    CreateBranchComponent,
    AllBranchComponent,
    CreateEmployeeComponent,
    CreateDepartmentComponent,
    AllDepartmentComponent,
    AllEmployeeComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class UserModule { }
