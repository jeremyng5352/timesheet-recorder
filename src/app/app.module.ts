import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HomeComponent } from './home/components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './home/components/sign-up/sign-up.component';
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';
import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';
import { TimesheetCardComponent } from './dashboard/components/timesheet-card/timesheet-card.component';
import { TimesheetFormComponent } from './dashboard/components/timesheet-form/timesheet-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignUpComponent,
    DashboardComponent,
    TimesheetCardComponent,
    TimesheetFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AmplifyAngularModule,
    MDBBootstrapModule.forRoot(),
  ],
  providers: [
    AmplifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

