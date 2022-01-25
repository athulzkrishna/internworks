import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { BasicDetailsComponent } from './basic-details/basic-details.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UiComponent } from './ui/ui.component';
import { EducationdetailsComponent } from './educationdetails/educationdetails.component';
import { AboutyouComponent } from './aboutyou/aboutyou.component';
import { PrevemploymentComponent } from './prevemployment/prevemployment.component';
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
  },
  {
    path: 'about',
    component: AboutyouComponent,
  },
  {
    path: 'prev',
    component: PrevemploymentComponent,
  },
  {
    path: 'education',
    component: EducationdetailsComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
