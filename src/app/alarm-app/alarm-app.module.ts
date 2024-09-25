import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlarmAppRoutingModule } from './alarm-app-routing.module';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AlarmAppRoutingModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
  ]
})
export class AlarmAppModule { }
