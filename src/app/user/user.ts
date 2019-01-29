export class User {
    uuid: string;
    username: string;
    email: string;
    phone: string;
    // timesheets: Timesheet[]

    constructor(
        uuid: string,
        username: string,
        email: string,
        phone: string,
        // timesheets: Timesheet[]
    ) {
        this.uuid = uuid;
        this.username = username;
        this.email = email;
        this.phone = phone;
    }
}
