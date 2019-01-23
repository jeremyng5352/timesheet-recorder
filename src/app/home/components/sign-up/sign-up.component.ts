import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

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
    return { username, password, confirmPassword, email, phone };
  }

  comparePassword(detail) {
    if (detail.password !== detail.confirmPassword) {
      this.isPasswordMatch = false;
    } else {
      this.isPasswordMatch = true;
    }
  }

  signup() {
    const detail = this.getFormValue();
  }
}
