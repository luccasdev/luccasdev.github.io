import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NavigationBarComponent} from './navigation-bar/navigation-bar.component';



@NgModule({
  declarations: [
    NavigationBarComponent
  ],
  exports: [
    NavigationBarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
