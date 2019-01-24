import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  signup(detail: any) {
    const username: string = detail.username;
    const password: string = detail.password;
    const email: string = detail.email;
    // const phone: string = detail.phone;
    Auth.signUp({
      username,
      password,
      attributes: {
        email,
        // phone,
      }
    }).then(data => console.log(data))
      .catch(err => console.log(err));
  }

  signin() {
    const username = 'bla';
    const password = 'bla';
    Auth.signIn({
      'username': username,
      'password': password
    }).then((user) => {
      console.log(user);
    })
      .catch(err => console.log(err));
  }

  signout() {
    Auth.signOut()
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }
}
