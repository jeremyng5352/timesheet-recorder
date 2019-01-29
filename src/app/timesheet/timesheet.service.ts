import { Injectable } from '@angular/core';
import { API, graphqlOperation } from 'aws-amplify';
import { createTimesheet } from './../../graphql/mutations';
import { Timesheet } from './timesheet';

@Injectable({
  providedIn: 'root'
})
export class TimesheetService {

  constructor(
  ) {}

  async generateTimesheet(id: string, title: string): Promise<boolean> {
    const response: any = await API.graphql(graphqlOperation(createTimesheet, {
      input: {
        title: title,
        timesheetOwnerId: id
      }
    }));
    if ( response.data ) {
      return true;
    } else {
      return false;
    }
  }

  parseDataToTimesheets(rawItems: any[]): Timesheet[] {
    const timesheets: Timesheet[] = [];
    for (const rawItem of rawItems) {
      const id = rawItem.id;
      const title = rawItem.title;
      const timesheet: Timesheet = new Timesheet(id, title);
      timesheets.push(timesheet);

    }
    return timesheets;
  }
}
