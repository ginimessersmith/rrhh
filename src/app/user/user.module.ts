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
import { CreateDepartmentBranchComponent } from './components/enterprise/create-department-branch/create-department-branch.component';
import { AllDepartmentBranchComponent } from './components/enterprise/all-department-branch/all-department-branch.component';
import { AllEmployeeComponent } from './components/employee/all-employee/all-employee.component';
import { ContractPageComponent } from './pages/contract-page/contract-page.component';
import { AttendancesPageComponent } from './pages/attendances-page/attendances-page.component';
import { DeductionsPageComponent } from './pages/deductions-page/deductions-page.component';
import { BonusesPageComponent } from './pages/bonuses-page/bonuses-page.component';
import { SettlementsPageComponent } from './pages/settlements-page/settlements-page.component';
import { PayrollsPageComponent } from './pages/payrolls-page/payrolls-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { CreatePositionComponent } from './components/enterprise/create-position/create-position.component';
import { AllPositionsComponent } from './components/enterprise/all-positions/all-positions.component';
import { CreateManagementComponent } from './components/form/create-management/create-management.component';
import { AllManagementComponent } from './components/form/all-management/all-management.component';
import { CreateContractTypesComponent } from './components/contract-types/create-contract-types/create-contract-types.component';
import { AllContractTypesComponent } from './components/contract-types/all-contract-types/all-contract-types.component';
import { AllPeriodsComponent } from './components/form/all-periods/all-periods.component';
import { CreatePeriodsComponent } from './components/form/create-periods/create-periods.component';
import { SharedModule } from '../shared/shared.module';
import { CreateDeductionComponent } from './components/form/create-deduction/create-deduction.component';
import { AllDeductionComponent } from './components/form/all-deduction/all-deduction.component';
import { AllDeductionBetweenDateComponent } from './components/form/all-deduction-between-date/all-deduction-between-date.component';
import { AllDeductionByContractComponent } from './components/form/all-deduction-by-contract/all-deduction-by-contract.component';
import { OneDeductionComponent } from './components/form/one-deduction/one-deduction.component';
import { OneBonusComponent } from './components/form/one-bonus/one-bonus.component';
import { AllBonusComponent } from './components/form/all-bonus/all-bonus.component';
import { AllBonusBetweenDateComponent } from './components/form/all-bonus-between-date/all-bonus-between-date.component';
import { AllBonusByContractComponent } from './components/form/all-bonus-by-contract/all-bonus-by-contract.component';
import { CreateBonusComponent } from './components/form/create-bonus/create-bonus.component';
import { CreateSettlementComponent } from './components/form/create-settlement/create-settlement.component';
import { AllSettlementComponent } from './components/form/all-settlement/all-settlement.component';
import { OneSettlementComponent } from './components/form/one-settlement/one-settlement.component';
import { CreatePayrollComponent } from './components/form/create-payroll/create-payroll.component';
import { AllPayrollComponent } from './components/form/all-payroll/all-payroll.component';
import { CreateContractComponent } from './components/personal/create-contract/create-contract.component';
import { AllContractComponent } from './components/personal/all-contract/all-contract.component';
import { CreateAttendancesComponent } from './components/personal/create-attendances/create-attendances.component';
import { AllAttendancesComponent } from './components/personal/all-attendances/all-attendances.component';
import { AllVacanciesComponent } from './components/vacancies/all-vacancies/all-vacancies.component';
import { CreateVacanciesComponent } from './components/vacancies/create-vacancies/create-vacancies.component';


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
    CreateDepartmentBranchComponent,
    AllDepartmentBranchComponent,
    AllEmployeeComponent,
    ContractPageComponent,
    AttendancesPageComponent,
    DeductionsPageComponent,
    BonusesPageComponent,
    SettlementsPageComponent,
    PayrollsPageComponent,
    UserPageComponent,
    CreateContractTypesComponent,
    AllContractTypesComponent,
    CreatePositionComponent,
    AllPositionsComponent,
    CreateManagementComponent,
    AllManagementComponent,
    AllPeriodsComponent,
    CreatePeriodsComponent,
    CreateDeductionComponent,
    AllDeductionComponent,
    AllDeductionBetweenDateComponent,
    AllDeductionByContractComponent,
    OneDeductionComponent,
    CreateContractComponent,
    AllContractComponent,
    AttendancesPageComponent,
    CreateAttendancesComponent,
    AllAttendancesComponent,
    OneBonusComponent,
    AllBonusComponent,
    AllBonusBetweenDateComponent,
    AllBonusByContractComponent,
    CreateBonusComponent,
    CreateSettlementComponent,
    AllSettlementComponent,
    OneSettlementComponent,
    CreatePayrollComponent,
    AllPayrollComponent,
    AllVacanciesComponent,
    CreateVacanciesComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    SharedModule,
  ]
})
export class UserModule { }
