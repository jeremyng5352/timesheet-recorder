import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../user/user.service';
import { User } from '../../../user/user';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
  subscription;
  isFormShown = false;
  currentUser: User;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      const username = params['username'];
      this.userService.getUserByUsername(username);
      this.userService.setupItemSubscription(username);
      this.userService.currentUserObservable.subscribe(user => {
        this.currentUser = user;
      });
   });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  closeForm() {
    this.isFormShown = false;
  }

}
