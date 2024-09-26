import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlarmAppRoutingModule } from './alarm-app-routing.module';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RegisteredComponent } from './pages/registered/registered.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { MyAlarmsComponent } from './pages/my-alarms/my-alarms.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { EditAlarmComponent } from './pages/edit-alarm/edit-alarm.component';
import { EditAlarmWaterComponent } from './pages/edit-alarm-water/edit-alarm-water.component';
import { RingingComponent } from './pages/ringing/ringing.component';
import { Challenge1Component } from './pages/challenge1/challenge1.component';
import { Challenge2Component } from './pages/challenge2/challenge2.component';
import { AsistenciaComponent } from './pages/asistencia/asistencia.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    RegisteredComponent,
    LayoutComponent,
    MyAlarmsComponent,
    EditAlarmComponent,
    EditAlarmWaterComponent,
    RingingComponent,
    Challenge1Component,
    Challenge2Component,
    AsistenciaComponent
  ],
  imports: [
    CommonModule,
    AlarmAppRoutingModule,
    MaterialModule,
    FormsModule,
    IonicModule.forRoot()
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideAnimationsAsync()
  ],
  exports: [
  ]
})
export class AlarmAppModule { }
