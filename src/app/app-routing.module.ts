import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './alarm-app/pages/layout/layout.component';
import { MenuHomeComponent } from './alarm-app/pages/menu-home/menu-home.component';
import { MyAlarmsComponent } from './alarm-app/pages/my-alarms/my-alarms.component';
import { EditAlarmComponent } from './alarm-app/pages/edit-alarm/edit-alarm.component';
import { EditAlarmWaterComponent } from './alarm-app/pages/edit-alarm-water/edit-alarm-water.component';
import { Challenge1Component } from './alarm-app/pages/challenge1/challenge1.component';
import { Challenge2Component } from './alarm-app/pages/challenge2/challenge2.component';
import { RingingComponent } from './alarm-app/pages/ringing/ringing.component';
import { AsistenciaComponent } from './alarm-app/pages/asistencia/asistencia.component';
import { LoginComponent } from './alarm-app/pages/login/login.component';
import { RegisterComponent } from './alarm-app/pages/register/register.component';
import { RegisteredComponent } from './alarm-app/pages/registered/registered.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'registered',
    component: RegisteredComponent
  },
  // Aquí empezamos con las rutas de 'app'
  {
    path: 'app',
    component: LayoutComponent, // El layout principal de la app
    children: [
      {
        path: 'my-alarms',
        component: MyAlarmsComponent,
        data: { title: 'My Alarms' }
      },
      {
        path: 'edit-alarm',
        component: EditAlarmComponent,
        data: { title: 'Edit Alarm' }
      },
      {
        path: 'edit-alarm-water',
        component: EditAlarmWaterComponent,
        data: { title: 'Edit Water Alarm' }
      },
      {
        path: 'challenge1',
        component: Challenge1Component,
        data: { title: 'Challenge 1' }
      },
      {
        path: 'challenge2',
        component: Challenge2Component,
        data: { title: 'Challenge 2' }
      },
      {
        path: 'ringing-alarm',
        component: RingingComponent,
        data: { title: 'Ringing' }
      },
      {
        path: 'asistencia',
        component: AsistenciaComponent,
        data: { title: 'Asistencia' }
      },
      {
        path: '**',
        redirectTo: 'my-alarms' // Si no encuentra la ruta, redirige a my-alarms
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'login' // Redirigir cualquier ruta no encontrada a login
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes) // Ya no necesitas preloading
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
