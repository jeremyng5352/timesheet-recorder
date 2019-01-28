import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  subscription;
  timesheetCardForm: FormGroup;
  username: string;
  isFormShown = false;
  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      this.username = params['username'];
   });
   this.buildForm();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  buildForm() {
    this.timesheetCardForm = this.formBuilder.group({
      title: this.formBuilder.control('', [Validators.required, Validators.minLength(6)]),
    });
  }

}
