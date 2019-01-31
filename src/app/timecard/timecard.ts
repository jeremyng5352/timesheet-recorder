export class Timecard {
    description: string;
    startDateTime: string;
    endDateTime: string;
    timeDifference: string;
    constructor(
        description: string,
        startDateTime: string,
        endDateTime: string,
        timeDifference: string
    ) {
        this.description = description;
        this.startDateTime = startDateTime;
        this.endDateTime = endDateTime;
        this.timeDifference = timeDifference;
    }
}
