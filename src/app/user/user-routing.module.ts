import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { HttpClient } from '@angular/common/http';
import { PerfilPageComponent } from './pages/perfil-page/perfil-page.component';
import { DepartmentsPageComponent } from './pages/departments-page/departments-page.component';
import { ManagementsPageComponent } from './pages/managements-page/managements-page.component';
import { ProfessionsPageComponent } from './pages/professions-page/professions-page.component';
import { VacanciesPageComponent } from './pages/vacancies-page/vacancies-page.component';

const routes: Routes = [
  {
    path:'',
    component:LayoutPageComponent,
    children:[
      {path:'perfil',component:PerfilPageComponent},
      {path:'department',component:DepartmentsPageComponent},
      {path:'management',component:ManagementsPageComponent},
      {path:'profession',component:ProfessionsPageComponent},
      {path:'vacancies',component:VacanciesPageComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
