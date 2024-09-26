import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { MenuHomeComponent } from './pages/menu-home/menu-home.component';
import { MyAlarmsComponent } from './pages/my-alarms/my-alarms.component';
import { EditAlarmComponent } from './pages/edit-alarm/edit-alarm.component';
import { EditAlarmWaterComponent } from './pages/edit-alarm-water/edit-alarm-water.component';

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
