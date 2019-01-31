export class Timecard {
    id: string;
    description: string;
    startDateTime: string;
    endDateTime: string;
    timeDifference: string;
    constructor(
        id: string,
        description: string,
        startDateTime: string,
        endDateTime: string,
        timeDifference: string
    ) {
        this.id = id;
        this.description = description;
        this.startDateTime = startDateTime;
        this.endDateTime = endDateTime;
        this.timeDifference = timeDifference;
    }
}
