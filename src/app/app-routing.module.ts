import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { LoginComponent } from './componentes/login/login.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { NewExpComponent } from './componentes/experience/new-exp.component';
import { EditExpComponent } from './componentes/experience/edit-exp.component';


const routes: Routes = [
  {path: '', component:PortfolioComponent},
  {path: 'iniciar-sesion',component:IniciarSesionComponent},
  {path: 'login',component:LoginComponent},
  {path: 'registro',component:RegistroComponent},
  {path: 'nueva-exp', component: NewExpComponent},
  {path: 'editar-exp/:id', component: EditExpComponent},

  {path: '**', redirectTo: '', pathMatch: 'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }