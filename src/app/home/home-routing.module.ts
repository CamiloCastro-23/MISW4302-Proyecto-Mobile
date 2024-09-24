import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { MenuHomeComponent } from './pages/menu-home/menu-home.component';

const routes: Routes = [
  {
    path: '',
    component: MenuHomeComponent,
    children: [
    //   {
    //     path: 'home',
    //     component: DashboardComponent
    //   },
    //   {
    //     path: 'my-alarms',
    //     component: RewardsComponent
    //   },
    //   {
    //     path: '**',
    //     redirectTo: 'home'
    //   }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
