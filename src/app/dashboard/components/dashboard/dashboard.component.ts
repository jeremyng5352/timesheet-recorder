import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  subscription;
  username: string;
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      this.username = params['username'];
   });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
