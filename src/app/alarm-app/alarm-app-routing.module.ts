import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { MenuHomeComponent } from './pages/menu-home/menu-home.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        component: MenuHomeComponent
      },
      {
        path: 'my-alarms',
        loadChildren: () => import('../my-alarms/my-alarms.module').then(m => m.MyAlarmsModule)
      },
      {
        path: '**',
        redirectTo: 'home'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlarmAppRoutingModule { }
