// tslint:disable
// this is an auto generated file. This will be overwritten

export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
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
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      username
      email
      phone
      timesheets {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getTimesheet = `query GetTimesheet($id: ID!) {
  getTimesheet(id: $id) {
    id
    title
    owner {
      id
      username
      email
      phone
      timesheets {
        nextToken
      }
    }
    permitted_users_id {
      id
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
export const listTimesheets = `query ListTimesheets(
  $filter: ModelTimesheetFilterInput
  $limit: Int
  $nextToken: String
) {
  listTimesheets(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      owner {
        id
        username
        email
        phone
      }
      permitted_users_id {
        id
        username
        email
        phone
      }
      timecards {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getTimecard = `query GetTimecard($id: ID!) {
  getTimecard(id: $id) {
    id
    title
    startDateTime
    endDateTime
    timeDifference
    fromTimeSheet {
      id
      title
      owner {
        id
        username
        email
        phone
      }
      permitted_users_id {
        id
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
export const listTimecards = `query ListTimecards(
  $filter: ModelTimecardFilterInput
  $limit: Int
  $nextToken: String
) {
  listTimecards(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      startDateTime
      endDateTime
      timeDifference
      fromTimeSheet {
        id
        title
      }
    }
    nextToken
  }
}
`;
