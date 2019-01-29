// tslint:disable
// this is an auto generated file. This will be overwritten

export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    uuid
    username
    email
    phone
    timesheets {
      items {
        id
        title
      }
      nextToken
    }
  }
}
`;
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
    uuid
    username
    email
    phone
    timesheets {
      items {
        id
        title
      }
      nextToken
    }
  }
}
`;
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
    uuid
    username
    email
    phone
    timesheets {
      items {
        id
        title
      }
      nextToken
    }
  }
}
`;
export const createTimesheet = `mutation CreateTimesheet($input: CreateTimesheetInput!) {
  createTimesheet(input: $input) {
    id
    title
    owner {
      uuid
      username
      email
      phone
      timesheets {
        nextToken
      }
    }
    permitted_users_id {
      uuid
      username
      email
      phone
      timesheets {
        nextToken
      }
    }
    timecards {
      items {
        id
        title
        startDateTime
        endDateTime
        timeDifference
      }
      nextToken
    }
  }
}
`;
export const updateTimesheet = `mutation UpdateTimesheet($input: UpdateTimesheetInput!) {
  updateTimesheet(input: $input) {
    id
    title
    owner {
      uuid
      username
      email
      phone
      timesheets {
        nextToken
      }
    }
    permitted_users_id {
      uuid
      username
      email
      phone
      timesheets {
        nextToken
      }
    }
    timecards {
      items {
        id
        title
        startDateTime
        endDateTime
        timeDifference
      }
      nextToken
    }
  }
}
`;
export const deleteTimesheet = `mutation DeleteTimesheet($input: DeleteTimesheetInput!) {
  deleteTimesheet(input: $input) {
    id
    title
    owner {
      uuid
      username
      email
      phone
      timesheets {
        nextToken
      }
    }
    permitted_users_id {
      uuid
      username
      email
      phone
      timesheets {
        nextToken
      }
    }
    timecards {
      items {
        id
        title
        startDateTime
        endDateTime
        timeDifference
      }
      nextToken
    }
  }
}
`;
export const createTimecard = `mutation CreateTimecard($input: CreateTimecardInput!) {
  createTimecard(input: $input) {
    id
    title
    startDateTime
    endDateTime
    timeDifference
    fromTimeSheet {
      id
      title
      owner {
        uuid
        username
        email
        phone
      }
      permitted_users_id {
        uuid
        username
        email
        phone
      }
      timecards {
        nextToken
      }
    }
  }
}
`;
export const updateTimecard = `mutation UpdateTimecard($input: UpdateTimecardInput!) {
  updateTimecard(input: $input) {
    id
    title
    startDateTime
    endDateTime
    timeDifference
    fromTimeSheet {
      id
      title
      owner {
        uuid
        username
        email
        phone
      }
      permitted_users_id {
        uuid
        username
        email
        phone
      }
      timecards {
        nextToken
      }
    }
  }
}
`;
export const deleteTimecard = `mutation DeleteTimecard($input: DeleteTimecardInput!) {
  deleteTimecard(input: $input) {
    id
    title
    startDateTime
    endDateTime
    timeDifference
    fromTimeSheet {
      id
      title
      owner {
        uuid
        username
        email
        phone
      }
      permitted_users_id {
        uuid
        username
        email
        phone
      }
      timecards {
        nextToken
      }
    }
  }
}
`;
