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


@NgModule({
  declarations: [
    LayoutPageComponent,
    PerfilPageComponent,
    ProfessionsPageComponent,
    ManagementsPageComponent,
    DepartmentsPageComponent,
    VacanciesPageComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class UserModule { }
