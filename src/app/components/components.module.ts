import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NavigationBarComponent} from './navigation-bar/navigation-bar.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';



@NgModule({
  declarations: [
    NavigationBarComponent,
    AboutMeComponent,
    SkillsComponent,
    ExperienceComponent
  ],
  exports: [
    NavigationBarComponent,
    AboutMeComponent,
    SkillsComponent,
    ExperienceComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
