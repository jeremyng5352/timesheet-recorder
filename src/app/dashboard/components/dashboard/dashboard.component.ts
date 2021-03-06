import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../user/user.service';
import { User } from 'src/app/user/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  subscription;
  currentUser: User;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      const username = params['username'];
      this.userService.getUserByUsername(username);
      this.userService.currentUserObservable.subscribe(user => {
        this.currentUser = user;
      });
   });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
