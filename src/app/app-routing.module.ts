import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/components/home/home.component';
import { SignUpComponent } from './home/components/sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';
import { MainComponent } from './dashboard/components/main/main.component';
import { TimesheetComponent } from './timesheet/components/timesheet/timesheet.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'sign-up', component: SignUpComponent},
  { path: 'dashboard/:username', component: DashboardComponent,
    children: [
      { path: 'dashboard/:username', redirectTo: '', pathMatch: 'full' },
      { path: '', component: MainComponent},
      { path: ':timesheet', component: TimesheetComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
