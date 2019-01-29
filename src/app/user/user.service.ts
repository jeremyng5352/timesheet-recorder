import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';
import { API, graphqlOperation } from 'aws-amplify';
import { createUser } from './../../graphql/mutations';
import { Router } from '@angular/router';
import { listUsers } from '../../graphql/queries';
import { User } from './user';
const uuidv4 = require('uuid/v4');

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private router: Router
  ) {
  }

  signup(detail: any) {
    const username: string = detail.username;
    const password: string = detail.password;
    const email: string = detail.email;
    const phone: string = detail.phone;
    Auth.signUp({
      username,
      password,
      attributes: {
        email,
        // phone,
      }
    }).then((data) => {
      this.storeCreatedUser(detail);
    }).catch(err => console.log(err));
  }

  async storeCreatedUser(detail) {
    const username: string = detail.username;
    const email: string = detail.email;
    const phone: string = detail.phone;
    const response = await API.graphql(graphqlOperation(createUser, {
      input: {
        username: username,
        email: email,
        phone: phone
      }
    }));
    this.redirectAfterSignUp(response);
  }

  redirectAfterSignUp(response: any) {
      if ( response.data ) {
        this.router.navigate(['home']);
      } else {
        alert(response.error);
      }
  }

  signin(username: string, password: string) {
    Auth.signIn({
      'username': username,
      'password': password
    }).then((user) => {
      this.redirecAfterSignIn(username);
    })
      .catch(err => console.log(err));
  }

  redirecAfterSignIn(username: string) {
      this.router.navigate(['/dashboard', username]);
}

  signout() {
    Auth.signOut()
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }

  async getUserByUsername(username: string) {
    const response = await API.graphql(graphqlOperation(listUsers, {
      'filter': {
       'username': {
         'eq': username
       }
      }
    }));
    return this.parseDataToUser(response);
  }

  parseDataToUser(response: any) {
    const rawUser = response.data.listUsers.items[0];
    const id = rawUser.id;
    const username = rawUser.username;
    const email = rawUser.email;
    const phone = rawUser.phone;
    // const timesheets = rawUser.timesheets;
    return new User(id, username, email, phone);
  }
}
