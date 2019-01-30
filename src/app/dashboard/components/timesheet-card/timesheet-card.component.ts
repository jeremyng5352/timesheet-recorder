import { Component, OnInit, Input } from '@angular/core';
import { Timesheet } from 'src/app/timesheet/timesheet';

@Component({
  selector: 'app-timesheet-card',
  templateUrl: './timesheet-card.component.html',
  styleUrls: ['./timesheet-card.component.scss']
})
export class TimesheetCardComponent implements OnInit {
  @Input() timesheet: Timesheet;
  constructor() { }

  ngOnInit() {
  }

}
