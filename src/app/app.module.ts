import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { AboutComponent } from './componentes/about/about.component';
import { ExperienceComponent } from './componentes/experience/experience.component';
import { EducationComponent } from './componentes/education/education.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProjectsComponent } from './componentes/projects/projects.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './componentes/login/login.component';
import { interceptorProvider } from './interceptors/portfolio-interceptor.service';
import { EditExpComponent } from './componentes/experience/edit-exp.component';
import { NewExpComponent } from './componentes/experience/new-exp.component';
import { EditPortfolioComponent } from './componentes/portfolio//edit-portfolio.component';
import { NewEduComponent } from './componentes/education/new-edu.component';
import { EditEduComponent } from './componentes/education/edit-edu.component';
import { EditHabiComponent } from './componentes/skills/edit-habi.component';
import { NewHabiComponent } from './componentes/skills/new-habi.component';
import { NewProyComponent } from './componentes/projects/new-proy.component';
import { EditProyComponent } from './componentes/projects/edit-proy.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';

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
    PortfolioComponent,
    LoginComponent,
    EditExpComponent,
    NewExpComponent,
    EditPortfolioComponent,
    NewEduComponent,
    EditEduComponent,
    EditHabiComponent,
    NewHabiComponent,
    NewProyComponent,
    EditProyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
