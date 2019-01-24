import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../../user/user.service';

class TemporaryUserDetail {
  username: string;
  password: string;
  confirmPassword: string;
  email: string;
  phone: string;

  constructor(
    username: string,
    password: string,
    confirmPassword: string,
    email: string,
    phone: string,
  ) {
    this.username = username;
    this.password = password;
    this.confirmPassword = confirmPassword;
    this.email = email;
    this.phone = phone;
  }
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements OnInit {
  signupForm: FormGroup;
  isPasswordMatch;
  timeout = null;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.signupForm = this.formBuilder.group({
      username: this.formBuilder.control('', [Validators.required, Validators.minLength(6)]),
      password: this.formBuilder.control('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: this.formBuilder.control('', [Validators.required]),
      // confirmPassword: this.formBuilder.control('', [Validators.required, Validators.minLength(6)]),
      email: this.formBuilder.control('', [Validators.required, Validators.minLength(6), Validators.email]),
      phone: this.formBuilder.control('', [Validators.required, Validators.minLength(10)])
    });
  }

  startPasswordMatching() {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      const detail = this.getFormValue();
      this.comparePassword(detail);
    }, 300);
  }

  getFormValue() {
    const username = this.signupForm.get('username').value;
    const password = this.signupForm.get('password').value;
    const confirmPassword = this.signupForm.get('confirmPassword').value;
    const email = this.signupForm.get('email').value;
    const phone = this.signupForm.get('phone').value;
    return new TemporaryUserDetail(username, password, confirmPassword, email, phone);
  }

  comparePassword(detail: TemporaryUserDetail) {
    if (detail.password !== detail.confirmPassword) {
      this.isPasswordMatch = false;
    } else {
      this.isPasswordMatch = true;
    }
  }

  signup() {
    const detail: TemporaryUserDetail = this.getFormValue();
    this.userService.signup(detail);
  }


}
