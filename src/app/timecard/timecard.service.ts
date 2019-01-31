import { Injectable } from '@angular/core';
import { API, graphqlOperation } from 'aws-amplify';
import { createTimecard } from '../../graphql/mutations';

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
}
