import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';




import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { AboutComponent } from './componentes/about/about.component';
import { ExperienceComponent } from './componentes/experience/experience.component';
import { EducationComponent } from './componentes/education/education.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProjectsComponent } from './componentes/projects/projects.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { PortfolioService } from './servicios/portfolio.service';
import { HttpClientModule } from '@angular/common/http';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    FooterComponent,
    IniciarSesionComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
