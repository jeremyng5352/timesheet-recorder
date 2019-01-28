import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import 'moment/locale/pt-br';
import { UserService } from '../../../user/user.service';
import * as moment from 'moment';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.buildForm();
    // moment.locale('en-au');
    // moment().format('MMMM Do YYYY, h:mm:ss a');
    // const now = moment().format('MMMM Do YYYY, h:mm a');
  }

  buildForm() {
    this.loginForm = this.formBuilder.group({
      username: this.formBuilder.control('', [Validators.required, Validators.minLength(6)]),
      password: this.formBuilder.control('', [Validators.required, Validators.minLength(6)]),
    });
  }

  login() {
    const username = this.loginForm.get('username').value;
    const password = this.loginForm.get('password').value;
    this.userService.signin(username, password);
  }

}
