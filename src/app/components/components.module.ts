import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NavigationBarComponent} from './navigation-bar/navigation-bar.component';
import { AboutMeComponent } from './about-me/about-me.component';



@NgModule({
  declarations: [
    NavigationBarComponent,
    AboutMeComponent
  ],
  exports: [
    NavigationBarComponent,
    AboutMeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
