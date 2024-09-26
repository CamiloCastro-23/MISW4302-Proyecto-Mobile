import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { MenuHomeComponent } from './pages/menu-home/menu-home.component';
import { MyAlarmsComponent } from './pages/my-alarms/my-alarms.component';
import { EditAlarmComponent } from './pages/edit-alarm/edit-alarm.component';
import { EditAlarmWaterComponent } from './pages/edit-alarm-water/edit-alarm-water.component';
import { Challenge1Component } from './pages/challenge1/challenge1.component';
import { Challenge2Component } from './pages/challenge2/challenge2.component';
import { RingingComponent } from './pages/ringing/ringing.component';
import { AsistenciaComponent } from './pages/asistencia/asistencia.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'my-alarms',
        component: MyAlarmsComponent
      },
      {
        path: "edit-alarm",
        component: EditAlarmComponent
      },
      {
        path: "edit-alarm-water",
        component: EditAlarmWaterComponent
      },
      {
        path: "ringing-alarm",
        component: RingingComponent
      },
      {
        path: "challenge1",
        component: Challenge1Component
      },
      {
        path: "challenge2",
        component: Challenge2Component
      },
      {
        path: "asistencia",
        component: AsistenciaComponent
      },
      {
        path: '**',
        redirectTo: 'my-alarms'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlarmAppRoutingModule { }
