import { Timecard } from '../timecard/timecard';

export class Timesheet {
    id: string;
    title: string;
    timecards: Timecard[];

    constructor(
        id: string,
        title: string,
        timecards: Timecard[]
    ) {
        this.id = id;
        this.title = title;
        this.timecards = timecards;
    }
}
