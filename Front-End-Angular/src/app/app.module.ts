import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToggleButtonComponent } from './components/toggle-button/toggle-button.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProfessionalInfoComponent } from './components/professional-info/professional-info.component';
import { EducationComponent } from './components/professional-info/education/education.component';
import { ExperienceComponent } from './components/professional-info/experience/experience.component';
import { HttpClientModule } from '@angular/common/http';
import { EditComponentComponent } from './components/edit-component/edit-component.component';
import { EditButtonComponent } from './components/edit-component/edit-button/edit-button.component';
import { FormsModule } from '@angular/forms';
import { PortfolioDataService } from './services/portfolio-data.service';
import { ProfessionalItemComponent } from './components/professional-info/professional-item/professional-item.component';
import { ProfessionalEditComponentComponent } from './components/professional-info/professional-edit-component/professional-edit-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ToggleButtonComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    ProfessionalInfoComponent,
    EducationComponent,
    ExperienceComponent,
    EditComponentComponent,
    EditButtonComponent,
    ProfessionalItemComponent,
    ProfessionalEditComponentComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [PortfolioDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
