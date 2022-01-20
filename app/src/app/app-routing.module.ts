import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { BasicDetailsComponent } from './basic-details/basic-details.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UiComponent } from './ui/ui.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'appointment-list',
    component: AppointmentListComponent,
  },
  {
    path: 'basic',
    component: BasicDetailsComponent,
  },
  {
    path: 'nav',
    component: NavBarComponent,
  },
  {
    path: 'ui',
    component: UiComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
