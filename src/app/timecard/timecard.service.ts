import { Injectable } from '@angular/core';
import { API, graphqlOperation } from 'aws-amplify';
import { createTimecard } from '../../graphql/mutations';
import { Timecard } from './timecard';

@Injectable({
  providedIn: 'root'
})
export class TimecardService {

  constructor() {
   }

   async generateTimecard(id: string, title: string, startDateTime: string): Promise<boolean> {
    const response: any = await API.graphql(graphqlOperation(createTimecard, {
      input: {
        title: title,
        startDateTime: startDateTime,
        timecardFromTimeSheetId: id
      }
    }));
    if (response.data) {
      return true;
    } else {
      return false;
    }
  }

  parseDataToTimecards(rawItems: any[]): Timecard[] {
    const timecards: Timecard[] = [];
    for (const rawItem of rawItems) {
      const timecard: Timecard = this.parseDataToTimecard(rawItem);
      timecards.push(timecard);
    }
    return timecards;
  }

  parseDataToTimecard(rawItem: any): Timecard {
    const id = rawItem.id;
    const title = rawItem.title;
    const startDateTime = rawItem.startDateTime;
    const endDateTime = rawItem.endDateTime;
    const timeDifference = rawItem.timeDifference;
    return new Timecard(id, title, startDateTime, endDateTime, timeDifference);
  }
}
