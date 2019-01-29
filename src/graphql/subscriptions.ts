// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
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
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
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
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
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
export const onCreateTimesheet = `subscription OnCreateTimesheet {
  onCreateTimesheet {
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
export const onUpdateTimesheet = `subscription OnUpdateTimesheet {
  onUpdateTimesheet {
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
export const onDeleteTimesheet = `subscription OnDeleteTimesheet {
  onDeleteTimesheet {
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
export const onCreateTimecard = `subscription OnCreateTimecard {
  onCreateTimecard {
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
export const onUpdateTimecard = `subscription OnUpdateTimecard {
  onUpdateTimecard {
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
export const onDeleteTimecard = `subscription OnDeleteTimecard {
  onDeleteTimecard {
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
