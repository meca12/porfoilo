import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavAsideComponent } from './portafolio/nav-aside/nav-aside.component';
import { MenuFloatComponent } from './portafolio/menu-float/menu-float.component';
import { SocialMenuComponent } from './portafolio/social-menu/social-menu.component';
import { MainSectionComponent } from './portafolio/main-section/main-section.component';
import { AboutSectionComponent } from './portafolio/about-section/about-section.component';
import { SkillsComponent } from './portafolio/skills/skills.component';
import { PortafolioSectionComponent } from './portafolio/portafolio-section/portafolio-section.component';
import { FooterSectionComponent } from './portafolio/footer-section/footer-section.component';

@NgModule({
  declarations: [
    AppComponent,
    NavAsideComponent,
    MenuFloatComponent,
    SocialMenuComponent,
    MainSectionComponent,
    AboutSectionComponent,
    SkillsComponent,
    PortafolioSectionComponent,
    FooterSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
