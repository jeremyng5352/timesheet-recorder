import { Injectable } from '@angular/core';
import { API, graphqlOperation } from 'aws-amplify';
import { createTimesheet } from './../../graphql/mutations';

@Injectable({
  providedIn: 'root'
})
export class TimesheetService {

  constructor() {}

  async generateTimesheet(id: string, title: string) {
    const response = await API.graphql(graphqlOperation(createTimesheet, {
      input: {
        title: title,
        timesheetOwnerId: id
      }
    }));
    console.log(response);
  }
}
