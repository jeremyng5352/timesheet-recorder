/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  username: string,
  email: string,
  phone: string,
};

export type UpdateUserInput = {
  id: string,
  username?: string | null,
  email?: string | null,
  phone?: string | null,
};

export type DeleteUserInput = {
  id?: string | null,
};

export type CreateTimesheetInput = {
  id?: string | null,
  title: string,
  timesheetOwnerId: string,
};

export type UpdateTimesheetInput = {
  id: string,
  title?: string | null,
  timesheetOwnerId?: string | null,
};

export type DeleteTimesheetInput = {
  id?: string | null,
};

export type CreateTimecardInput = {
  id?: string | null,
  title?: string | null,
  startDateTime?: string | null,
  endDateTime?: string | null,
  timeDifference?: string | null,
  timecardFromTimeSheetId?: string | null,
};

export type UpdateTimecardInput = {
  id: string,
  title?: string | null,
  startDateTime?: string | null,
  endDateTime?: string | null,
  timeDifference?: string | null,
  timecardFromTimeSheetId?: string | null,
};

export type DeleteTimecardInput = {
  id?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDFilterInput | null,
  username?: ModelStringFilterInput | null,
  email?: ModelStringFilterInput | null,
  phone?: ModelStringFilterInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelTimesheetFilterInput = {
  id?: ModelIDFilterInput | null,
  title?: ModelStringFilterInput | null,
  and?: Array< ModelTimesheetFilterInput | null > | null,
  or?: Array< ModelTimesheetFilterInput | null > | null,
  not?: ModelTimesheetFilterInput | null,
};

export type ModelTimecardFilterInput = {
  id?: ModelIDFilterInput | null,
  title?: ModelStringFilterInput | null,
  startDateTime?: ModelStringFilterInput | null,
  endDateTime?: ModelStringFilterInput | null,
  timeDifference?: ModelStringFilterInput | null,
  and?: Array< ModelTimecardFilterInput | null > | null,
  or?: Array< ModelTimecardFilterInput | null > | null,
  not?: ModelTimecardFilterInput | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
};

export type CreateUserMutation = {
  createUser:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    phone: string,
    timesheets:  {
      __typename: "ModelTimesheetConnection",
      items:  Array< {
        __typename: "Timesheet",
        id: string,
        title: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
};

export type UpdateUserMutation = {
  updateUser:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    phone: string,
    timesheets:  {
      __typename: "ModelTimesheetConnection",
      items:  Array< {
        __typename: "Timesheet",
        id: string,
        title: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
};

export type DeleteUserMutation = {
  deleteUser:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    phone: string,
    timesheets:  {
      __typename: "ModelTimesheetConnection",
      items:  Array< {
        __typename: "Timesheet",
        id: string,
        title: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateTimesheetMutationVariables = {
  input: CreateTimesheetInput,
};

export type CreateTimesheetMutation = {
  createTimesheet:  {
    __typename: "Timesheet",
    id: string,
    title: string,
    owner:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      phone: string,
      timesheets:  {
        __typename: "ModelTimesheetConnection",
        nextToken: string | null,
      } | null,
    },
    permitted_users_id:  Array< {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      phone: string,
      timesheets:  {
        __typename: "ModelTimesheetConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    timecards:  {
      __typename: "ModelTimecardConnection",
      items:  Array< {
        __typename: "Timecard",
        id: string,
        title: string | null,
        startDateTime: string | null,
        endDateTime: string | null,
        timeDifference: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdateTimesheetMutationVariables = {
  input: UpdateTimesheetInput,
};

export type UpdateTimesheetMutation = {
  updateTimesheet:  {
    __typename: "Timesheet",
    id: string,
    title: string,
    owner:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      phone: string,
      timesheets:  {
        __typename: "ModelTimesheetConnection",
        nextToken: string | null,
      } | null,
    },
    permitted_users_id:  Array< {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      phone: string,
      timesheets:  {
        __typename: "ModelTimesheetConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    timecards:  {
      __typename: "ModelTimecardConnection",
      items:  Array< {
        __typename: "Timecard",
        id: string,
        title: string | null,
        startDateTime: string | null,
        endDateTime: string | null,
        timeDifference: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeleteTimesheetMutationVariables = {
  input: DeleteTimesheetInput,
};

export type DeleteTimesheetMutation = {
  deleteTimesheet:  {
    __typename: "Timesheet",
    id: string,
    title: string,
    owner:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      phone: string,
      timesheets:  {
        __typename: "ModelTimesheetConnection",
        nextToken: string | null,
      } | null,
    },
    permitted_users_id:  Array< {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      phone: string,
      timesheets:  {
        __typename: "ModelTimesheetConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    timecards:  {
      __typename: "ModelTimecardConnection",
      items:  Array< {
        __typename: "Timecard",
        id: string,
        title: string | null,
        startDateTime: string | null,
        endDateTime: string | null,
        timeDifference: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateTimecardMutationVariables = {
  input: CreateTimecardInput,
};

export type CreateTimecardMutation = {
  createTimecard:  {
    __typename: "Timecard",
    id: string,
    title: string | null,
    startDateTime: string | null,
    endDateTime: string | null,
    timeDifference: string | null,
    fromTimeSheet:  {
      __typename: "Timesheet",
      id: string,
      title: string,
      owner:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        phone: string,
      },
      permitted_users_id:  Array< {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        phone: string,
      } | null > | null,
      timecards:  {
        __typename: "ModelTimecardConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type UpdateTimecardMutationVariables = {
  input: UpdateTimecardInput,
};

export type UpdateTimecardMutation = {
  updateTimecard:  {
    __typename: "Timecard",
    id: string,
    title: string | null,
    startDateTime: string | null,
    endDateTime: string | null,
    timeDifference: string | null,
    fromTimeSheet:  {
      __typename: "Timesheet",
      id: string,
      title: string,
      owner:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        phone: string,
      },
      permitted_users_id:  Array< {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        phone: string,
      } | null > | null,
      timecards:  {
        __typename: "ModelTimecardConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type DeleteTimecardMutationVariables = {
  input: DeleteTimecardInput,
};

export type DeleteTimecardMutation = {
  deleteTimecard:  {
    __typename: "Timecard",
    id: string,
    title: string | null,
    startDateTime: string | null,
    endDateTime: string | null,
    timeDifference: string | null,
    fromTimeSheet:  {
      __typename: "Timesheet",
      id: string,
      title: string,
      owner:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        phone: string,
      },
      permitted_users_id:  Array< {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        phone: string,
      } | null > | null,
      timecards:  {
        __typename: "ModelTimecardConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    phone: string,
    timesheets:  {
      __typename: "ModelTimesheetConnection",
      items:  Array< {
        __typename: "Timesheet",
        id: string,
        title: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      phone: string,
      timesheets:  {
        __typename: "ModelTimesheetConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetTimesheetQueryVariables = {
  id: string,
};

export type GetTimesheetQuery = {
  getTimesheet:  {
    __typename: "Timesheet",
    id: string,
    title: string,
    owner:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      phone: string,
      timesheets:  {
        __typename: "ModelTimesheetConnection",
        nextToken: string | null,
      } | null,
    },
    permitted_users_id:  Array< {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      phone: string,
      timesheets:  {
        __typename: "ModelTimesheetConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    timecards:  {
      __typename: "ModelTimecardConnection",
      items:  Array< {
        __typename: "Timecard",
        id: string,
        title: string | null,
        startDateTime: string | null,
        endDateTime: string | null,
        timeDifference: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type ListTimesheetsQueryVariables = {
  filter?: ModelTimesheetFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTimesheetsQuery = {
  listTimesheets:  {
    __typename: "ModelTimesheetConnection",
    items:  Array< {
      __typename: "Timesheet",
      id: string,
      title: string,
      owner:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        phone: string,
      },
      permitted_users_id:  Array< {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        phone: string,
      } | null > | null,
      timecards:  {
        __typename: "ModelTimecardConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetTimecardQueryVariables = {
  id: string,
};

export type GetTimecardQuery = {
  getTimecard:  {
    __typename: "Timecard",
    id: string,
    title: string | null,
    startDateTime: string | null,
    endDateTime: string | null,
    timeDifference: string | null,
    fromTimeSheet:  {
      __typename: "Timesheet",
      id: string,
      title: string,
      owner:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        phone: string,
      },
      permitted_users_id:  Array< {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        phone: string,
      } | null > | null,
      timecards:  {
        __typename: "ModelTimecardConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type ListTimecardsQueryVariables = {
  filter?: ModelTimecardFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTimecardsQuery = {
  listTimecards:  {
    __typename: "ModelTimecardConnection",
    items:  Array< {
      __typename: "Timecard",
      id: string,
      title: string | null,
      startDateTime: string | null,
      endDateTime: string | null,
      timeDifference: string | null,
      fromTimeSheet:  {
        __typename: "Timesheet",
        id: string,
        title: string,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    phone: string,
    timesheets:  {
      __typename: "ModelTimesheetConnection",
      items:  Array< {
        __typename: "Timesheet",
        id: string,
        title: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    phone: string,
    timesheets:  {
      __typename: "ModelTimesheetConnection",
      items:  Array< {
        __typename: "Timesheet",
        id: string,
        title: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    phone: string,
    timesheets:  {
      __typename: "ModelTimesheetConnection",
      items:  Array< {
        __typename: "Timesheet",
        id: string,
        title: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateTimesheetSubscription = {
  onCreateTimesheet:  {
    __typename: "Timesheet",
    id: string,
    title: string,
    owner:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      phone: string,
      timesheets:  {
        __typename: "ModelTimesheetConnection",
        nextToken: string | null,
      } | null,
    },
    permitted_users_id:  Array< {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      phone: string,
      timesheets:  {
        __typename: "ModelTimesheetConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    timecards:  {
      __typename: "ModelTimecardConnection",
      items:  Array< {
        __typename: "Timecard",
        id: string,
        title: string | null,
        startDateTime: string | null,
        endDateTime: string | null,
        timeDifference: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdateTimesheetSubscription = {
  onUpdateTimesheet:  {
    __typename: "Timesheet",
    id: string,
    title: string,
    owner:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      phone: string,
      timesheets:  {
        __typename: "ModelTimesheetConnection",
        nextToken: string | null,
      } | null,
    },
    permitted_users_id:  Array< {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      phone: string,
      timesheets:  {
        __typename: "ModelTimesheetConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    timecards:  {
      __typename: "ModelTimecardConnection",
      items:  Array< {
        __typename: "Timecard",
        id: string,
        title: string | null,
        startDateTime: string | null,
        endDateTime: string | null,
        timeDifference: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeleteTimesheetSubscription = {
  onDeleteTimesheet:  {
    __typename: "Timesheet",
    id: string,
    title: string,
    owner:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      phone: string,
      timesheets:  {
        __typename: "ModelTimesheetConnection",
        nextToken: string | null,
      } | null,
    },
    permitted_users_id:  Array< {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      phone: string,
      timesheets:  {
        __typename: "ModelTimesheetConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    timecards:  {
      __typename: "ModelTimecardConnection",
      items:  Array< {
        __typename: "Timecard",
        id: string,
        title: string | null,
        startDateTime: string | null,
        endDateTime: string | null,
        timeDifference: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateTimecardSubscription = {
  onCreateTimecard:  {
    __typename: "Timecard",
    id: string,
    title: string | null,
    startDateTime: string | null,
    endDateTime: string | null,
    timeDifference: string | null,
    fromTimeSheet:  {
      __typename: "Timesheet",
      id: string,
      title: string,
      owner:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        phone: string,
      },
      permitted_users_id:  Array< {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        phone: string,
      } | null > | null,
      timecards:  {
        __typename: "ModelTimecardConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnUpdateTimecardSubscription = {
  onUpdateTimecard:  {
    __typename: "Timecard",
    id: string,
    title: string | null,
    startDateTime: string | null,
    endDateTime: string | null,
    timeDifference: string | null,
    fromTimeSheet:  {
      __typename: "Timesheet",
      id: string,
      title: string,
      owner:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        phone: string,
      },
      permitted_users_id:  Array< {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        phone: string,
      } | null > | null,
      timecards:  {
        __typename: "ModelTimecardConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnDeleteTimecardSubscription = {
  onDeleteTimecard:  {
    __typename: "Timecard",
    id: string,
    title: string | null,
    startDateTime: string | null,
    endDateTime: string | null,
    timeDifference: string | null,
    fromTimeSheet:  {
      __typename: "Timesheet",
      id: string,
      title: string,
      owner:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        phone: string,
      },
      permitted_users_id:  Array< {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        phone: string,
      } | null > | null,
      timecards:  {
        __typename: "ModelTimecardConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};
