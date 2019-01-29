export class User {
    id: string;
    username: string;
    email: string;
    phone: string;
    // timesheets: Timesheet[]

    constructor(
        id: string,
        username: string,
        email: string,
        phone: string,
        // timesheets: Timesheet[]
    ) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.phone = phone;
    }
}
