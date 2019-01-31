import { Injectable } from '@angular/core';
import { API, graphqlOperation } from 'aws-amplify';
import { createTimesheet } from './../../graphql/mutations';
import { Timesheet } from './timesheet';
import { Observable, Subject } from 'rxjs';
import { getTimesheet, listTimesheets } from '../../graphql/queries';
import { TimecardService } from '../timecard/timecard.service';
import { Timecard } from '../timecard/timecard';

@Injectable({
  providedIn: 'root'
})
export class TimesheetService {

  currentTimesheetObservable: Subject<Timesheet> = new Subject();
  constructor(
    private timecardService: TimecardService
  ) { }

  async generateTimesheet(id: string, title: string): Promise<boolean> {
    const response: any = await API.graphql(graphqlOperation(createTimesheet, {
      input: {
        title: title,
        timesheetOwnerId: id
      }
    }));
    if (response.data) {
      return true;
    } else {
      return false;
    }
  }

  parseDataToTimesheets(rawItems: any[]): Timesheet[] {
    const timesheets: Timesheet[] = [];
    for (const rawItem of rawItems) {
      const timesheet: Timesheet = this.parseDataToTimesheet(rawItem);
      timesheets.push(timesheet);

    }
    return timesheets;
  }

  parseDataToTimesheet(rawItem: any): Timesheet {
    let timecards: Timecard[];
    const id = rawItem.id;
    const title = rawItem.title;
    if (rawItem.timecards) {
      timecards = this.timecardService.parseDataToTimecards(rawItem.timecards.items);
    } else {
      timecards = [];
    }
    return new Timesheet(id, title, timecards);
  }

  getTimesheet(): Observable<Timesheet> {
    return this.currentTimesheetObservable;
  }

  async getTimesheetById(id: string) {
    const response: any = await API.graphql(graphqlOperation(getTimesheet, {
      'id': id
    }));
    const data = response.data.getTimesheet;
    const convertedTimesheet = this.parseDataToTimesheet(data);
    this.currentTimesheetObservable.next(convertedTimesheet);
  }
}
