import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import * as moment from 'moment';
import 'moment/locale/pt-br';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor() { }

  ngOnInit() {
    moment.locale('en-au');
    moment().format('MMMM Do YYYY, h:mm:ss a');
    const now = moment().format('MMMM Do YYYY, h:mm a');
  }

  login() {

  }

}
