import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../../user/user.service';
import { User } from 'src/app/user/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  subscription;
  timesheetCardForm: FormGroup;
  isFormShown = false;
  currentUser: User;
  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      const username = params['username'];
      this.userService.getUserByUsername(username).then((user: User) => {
        this.currentUser = user;
      });
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
