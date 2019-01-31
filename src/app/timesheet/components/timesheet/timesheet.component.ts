import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TimesheetService } from '../../timesheet.service';
import { Timesheet } from '../../timesheet';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.scss']
})
export class TimesheetComponent implements OnInit, OnDestroy {
  subscription;
  currentTimesheet: Timesheet;
  isFormShown: boolean;
  constructor(
    private route: ActivatedRoute,
    private timesheetService: TimesheetService,
  ) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      const id = params['timesheet'];
      this.timesheetService.getTimesheetById(id);
      this.timesheetService.currentTimesheetObservable.subscribe(timesheet => {
        this.currentTimesheet = timesheet;
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
