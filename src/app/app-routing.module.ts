import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { LoginComponent } from './componentes/login/login.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { NewExpComponent } from './componentes/experience/new-exp.component';
import { EditExpComponent } from './componentes/experience/edit-exp.component';
import { EditPortfolioComponent } from './componentes/portfolio/edit-portfolio.component';
import { NewEduComponent } from './componentes/education/new-edu.component';
import { EditEduComponent } from './componentes/education/edit-edu.component';
import { NewHabiComponent } from './componentes/skills/new-habi.component';
import { EditHabiComponent } from './componentes/skills/edit-habi.component';
import { NewProyComponent } from './componentes/projects/new-proy.component';
import { EditProyComponent } from './componentes/projects/edit-proy.component';
import { PortfolioGuardService as guard} from './guards/portfolio-guard.service';

const routes: Routes = [
  {path: '', component:PortfolioComponent},
  {path: 'iniciar-sesion',component:IniciarSesionComponent},
  {path: 'login',component:LoginComponent},
  {path: 'registro',component:RegistroComponent},
  
  {path: 'nueva-exp', component: NewExpComponent, canActivate: [guard], data: {expectedRol: ['admin', 'user']}},
  {path: 'editar-exp/:id', component: EditExpComponent, canActivate: [guard], data: {expectedRol: ['admin', 'user']}},
  {path: 'editar-data', component: EditPortfolioComponent, canActivate: [guard], data: {expectedRol: ['admin', 'user']}},
  {path: 'nueva-edu', component: NewEduComponent, canActivate: [guard], data: {expectedRol: ['admin', 'user']}},
  {path: 'editar-edu/:id', component: EditEduComponent, canActivate: [guard], data: {expectedRol: ['admin', 'user']}},
  {path: 'nueva-habi', component: NewHabiComponent, canActivate: [guard], data: {expectedRol: ['admin', 'user']}},
  {path: 'editar-habi/:id', component: EditHabiComponent, canActivate: [guard], data: {expectedRol: ['admin', 'user']}},
  {path: 'nuevo-proy', component: NewProyComponent, canActivate: [guard], data: {expectedRol: ['admin', 'user']}},
  {path: 'editar-proy/:id', component: EditProyComponent, canActivate: [guard], data: {expectedRol: ['admin', 'user']}},

  {path: '**', redirectTo: '', pathMatch: 'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }