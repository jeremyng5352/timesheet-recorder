/* tslint:disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type CreateUserInput = {
  uuid: string;
  username: string;
  email: string;
  phone: string;
};

export type UpdateUserInput = {
  uuid?: string | null;
  username?: string | null;
  email?: string | null;
  phone?: string | null;
};

export type DeleteUserInput = {
  id?: string | null;
};

export type CreateTimesheetInput = {
  id?: string | null;
  title: string;
  timesheetOwnerId: string;
};

export type UpdateTimesheetInput = {
  id: string;
  title?: string | null;
  timesheetOwnerId?: string | null;
};

export type DeleteTimesheetInput = {
  id?: string | null;
};

export type CreateTimecardInput = {
  id?: string | null;
  title?: string | null;
  startDateTime?: string | null;
  endDateTime?: string | null;
  timeDifference?: string | null;
  timecardFromTimeSheetId?: string | null;
};

export type UpdateTimecardInput = {
  id: string;
  title?: string | null;
  startDateTime?: string | null;
  endDateTime?: string | null;
  timeDifference?: string | null;
  timecardFromTimeSheetId?: string | null;
};

export type DeleteTimecardInput = {
  id?: string | null;
};

export type ModelUserFilterInput = {
  uuid?: ModelIDFilterInput | null;
  username?: ModelStringFilterInput | null;
  email?: ModelStringFilterInput | null;
  phone?: ModelStringFilterInput | null;
  and?: Array<ModelUserFilterInput | null> | null;
  or?: Array<ModelUserFilterInput | null> | null;
  not?: ModelUserFilterInput | null;
};

export type ModelIDFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelStringFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelTimesheetFilterInput = {
  id?: ModelIDFilterInput | null;
  title?: ModelStringFilterInput | null;
  and?: Array<ModelTimesheetFilterInput | null> | null;
  or?: Array<ModelTimesheetFilterInput | null> | null;
  not?: ModelTimesheetFilterInput | null;
};

export type ModelTimecardFilterInput = {
  id?: ModelIDFilterInput | null;
  title?: ModelStringFilterInput | null;
  startDateTime?: ModelStringFilterInput | null;
  endDateTime?: ModelStringFilterInput | null;
  timeDifference?: ModelStringFilterInput | null;
  and?: Array<ModelTimecardFilterInput | null> | null;
  or?: Array<ModelTimecardFilterInput | null> | null;
  not?: ModelTimecardFilterInput | null;
};

export type CreateUserMutation = {
  __typename: string;
  uuid: string;
  username: string;
  email: string;
  phone: string;
  timesheets: {
    __typename: "ModelTimesheetConnection";
    items: Array<{
      __typename: "Timesheet";
      id: string;
      title: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type UpdateUserMutation = {
  __typename: string;
  uuid: string;
  username: string;
  email: string;
  phone: string;
  timesheets: {
    __typename: "ModelTimesheetConnection";
    items: Array<{
      __typename: "Timesheet";
      id: string;
      title: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type DeleteUserMutation = {
  __typename: string;
  uuid: string;
  username: string;
  email: string;
  phone: string;
  timesheets: {
    __typename: "ModelTimesheetConnection";
    items: Array<{
      __typename: "Timesheet";
      id: string;
      title: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type CreateTimesheetMutation = {
  __typename: string;
  id: string;
  title: string;
  owner: {
    __typename: "User";
    uuid: string;
    username: string;
    email: string;
    phone: string;
    timesheets: {
      __typename: "ModelTimesheetConnection";
      nextToken: string | null;
    } | null;
  };
  permitted_users_id: Array<{
    __typename: "User";
    uuid: string;
    username: string;
    email: string;
    phone: string;
    timesheets: {
      __typename: "ModelTimesheetConnection";
      nextToken: string | null;
    } | null;
  } | null> | null;
  timecards: {
    __typename: "ModelTimecardConnection";
    items: Array<{
      __typename: "Timecard";
      id: string;
      title: string | null;
      startDateTime: string | null;
      endDateTime: string | null;
      timeDifference: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type UpdateTimesheetMutation = {
  __typename: string;
  id: string;
  title: string;
  owner: {
    __typename: "User";
    uuid: string;
    username: string;
    email: string;
    phone: string;
    timesheets: {
      __typename: "ModelTimesheetConnection";
      nextToken: string | null;
    } | null;
  };
  permitted_users_id: Array<{
    __typename: "User";
    uuid: string;
    username: string;
    email: string;
    phone: string;
    timesheets: {
      __typename: "ModelTimesheetConnection";
      nextToken: string | null;
    } | null;
  } | null> | null;
  timecards: {
    __typename: "ModelTimecardConnection";
    items: Array<{
      __typename: "Timecard";
      id: string;
      title: string | null;
      startDateTime: string | null;
      endDateTime: string | null;
      timeDifference: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type DeleteTimesheetMutation = {
  __typename: string;
  id: string;
  title: string;
  owner: {
    __typename: "User";
    uuid: string;
    username: string;
    email: string;
    phone: string;
    timesheets: {
      __typename: "ModelTimesheetConnection";
      nextToken: string | null;
    } | null;
  };
  permitted_users_id: Array<{
    __typename: "User";
    uuid: string;
    username: string;
    email: string;
    phone: string;
    timesheets: {
      __typename: "ModelTimesheetConnection";
      nextToken: string | null;
    } | null;
  } | null> | null;
  timecards: {
    __typename: "ModelTimecardConnection";
    items: Array<{
      __typename: "Timecard";
      id: string;
      title: string | null;
      startDateTime: string | null;
      endDateTime: string | null;
      timeDifference: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type CreateTimecardMutation = {
  __typename: string;
  id: string;
  title: string | null;
  startDateTime: string | null;
  endDateTime: string | null;
  timeDifference: string | null;
  fromTimeSheet: {
    __typename: "Timesheet";
    id: string;
    title: string;
    owner: {
      __typename: "User";
      uuid: string;
      username: string;
      email: string;
      phone: string;
    };
    permitted_users_id: Array<{
      __typename: "User";
      uuid: string;
      username: string;
      email: string;
      phone: string;
    } | null> | null;
    timecards: {
      __typename: "ModelTimecardConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type UpdateTimecardMutation = {
  __typename: string;
  id: string;
  title: string | null;
  startDateTime: string | null;
  endDateTime: string | null;
  timeDifference: string | null;
  fromTimeSheet: {
    __typename: "Timesheet";
    id: string;
    title: string;
    owner: {
      __typename: "User";
      uuid: string;
      username: string;
      email: string;
      phone: string;
    };
    permitted_users_id: Array<{
      __typename: "User";
      uuid: string;
      username: string;
      email: string;
      phone: string;
    } | null> | null;
    timecards: {
      __typename: "ModelTimecardConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type DeleteTimecardMutation = {
  __typename: string;
  id: string;
  title: string | null;
  startDateTime: string | null;
  endDateTime: string | null;
  timeDifference: string | null;
  fromTimeSheet: {
    __typename: "Timesheet";
    id: string;
    title: string;
    owner: {
      __typename: "User";
      uuid: string;
      username: string;
      email: string;
      phone: string;
    };
    permitted_users_id: Array<{
      __typename: "User";
      uuid: string;
      username: string;
      email: string;
      phone: string;
    } | null> | null;
    timecards: {
      __typename: "ModelTimecardConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type GetUserQuery = {
  __typename: string;
  uuid: string;
  username: string;
  email: string;
  phone: string;
  timesheets: {
    __typename: "ModelTimesheetConnection";
    items: Array<{
      __typename: "Timesheet";
      id: string;
      title: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type ListUsersQuery = {
  __typename: string;
  items: Array<{
    __typename: "User";
    uuid: string;
    username: string;
    email: string;
    phone: string;
    timesheets: {
      __typename: "ModelTimesheetConnection";
      nextToken: string | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetTimesheetQuery = {
  __typename: string;
  id: string;
  title: string;
  owner: {
    __typename: "User";
    uuid: string;
    username: string;
    email: string;
    phone: string;
    timesheets: {
      __typename: "ModelTimesheetConnection";
      nextToken: string | null;
    } | null;
  };
  permitted_users_id: Array<{
    __typename: "User";
    uuid: string;
    username: string;
    email: string;
    phone: string;
    timesheets: {
      __typename: "ModelTimesheetConnection";
      nextToken: string | null;
    } | null;
  } | null> | null;
  timecards: {
    __typename: "ModelTimecardConnection";
    items: Array<{
      __typename: "Timecard";
      id: string;
      title: string | null;
      startDateTime: string | null;
      endDateTime: string | null;
      timeDifference: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type ListTimesheetsQuery = {
  __typename: string;
  items: Array<{
    __typename: "Timesheet";
    id: string;
    title: string;
    owner: {
      __typename: "User";
      uuid: string;
      username: string;
      email: string;
      phone: string;
    };
    permitted_users_id: Array<{
      __typename: "User";
      uuid: string;
      username: string;
      email: string;
      phone: string;
    } | null> | null;
    timecards: {
      __typename: "ModelTimecardConnection";
      nextToken: string | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetTimecardQuery = {
  __typename: string;
  id: string;
  title: string | null;
  startDateTime: string | null;
  endDateTime: string | null;
  timeDifference: string | null;
  fromTimeSheet: {
    __typename: "Timesheet";
    id: string;
    title: string;
    owner: {
      __typename: "User";
      uuid: string;
      username: string;
      email: string;
      phone: string;
    };
    permitted_users_id: Array<{
      __typename: "User";
      uuid: string;
      username: string;
      email: string;
      phone: string;
    } | null> | null;
    timecards: {
      __typename: "ModelTimecardConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type ListTimecardsQuery = {
  __typename: string;
  items: Array<{
    __typename: "Timecard";
    id: string;
    title: string | null;
    startDateTime: string | null;
    endDateTime: string | null;
    timeDifference: string | null;
    fromTimeSheet: {
      __typename: "Timesheet";
      id: string;
      title: string;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateUserSubscription = {
  __typename: string;
  uuid: string;
  username: string;
  email: string;
  phone: string;
  timesheets: {
    __typename: "ModelTimesheetConnection";
    items: Array<{
      __typename: "Timesheet";
      id: string;
      title: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnUpdateUserSubscription = {
  __typename: string;
  uuid: string;
  username: string;
  email: string;
  phone: string;
  timesheets: {
    __typename: "ModelTimesheetConnection";
    items: Array<{
      __typename: "Timesheet";
      id: string;
      title: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnDeleteUserSubscription = {
  __typename: string;
  uuid: string;
  username: string;
  email: string;
  phone: string;
  timesheets: {
    __typename: "ModelTimesheetConnection";
    items: Array<{
      __typename: "Timesheet";
      id: string;
      title: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnCreateTimesheetSubscription = {
  __typename: string;
  id: string;
  title: string;
  owner: {
    __typename: "User";
    uuid: string;
    username: string;
    email: string;
    phone: string;
    timesheets: {
      __typename: "ModelTimesheetConnection";
      nextToken: string | null;
    } | null;
  };
  permitted_users_id: Array<{
    __typename: "User";
    uuid: string;
    username: string;
    email: string;
    phone: string;
    timesheets: {
      __typename: "ModelTimesheetConnection";
      nextToken: string | null;
    } | null;
  } | null> | null;
  timecards: {
    __typename: "ModelTimecardConnection";
    items: Array<{
      __typename: "Timecard";
      id: string;
      title: string | null;
      startDateTime: string | null;
      endDateTime: string | null;
      timeDifference: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnUpdateTimesheetSubscription = {
  __typename: string;
  id: string;
  title: string;
  owner: {
    __typename: "User";
    uuid: string;
    username: string;
    email: string;
    phone: string;
    timesheets: {
      __typename: "ModelTimesheetConnection";
      nextToken: string | null;
    } | null;
  };
  permitted_users_id: Array<{
    __typename: "User";
    uuid: string;
    username: string;
    email: string;
    phone: string;
    timesheets: {
      __typename: "ModelTimesheetConnection";
      nextToken: string | null;
    } | null;
  } | null> | null;
  timecards: {
    __typename: "ModelTimecardConnection";
    items: Array<{
      __typename: "Timecard";
      id: string;
      title: string | null;
      startDateTime: string | null;
      endDateTime: string | null;
      timeDifference: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnDeleteTimesheetSubscription = {
  __typename: string;
  id: string;
  title: string;
  owner: {
    __typename: "User";
    uuid: string;
    username: string;
    email: string;
    phone: string;
    timesheets: {
      __typename: "ModelTimesheetConnection";
      nextToken: string | null;
    } | null;
  };
  permitted_users_id: Array<{
    __typename: "User";
    uuid: string;
    username: string;
    email: string;
    phone: string;
    timesheets: {
      __typename: "ModelTimesheetConnection";
      nextToken: string | null;
    } | null;
  } | null> | null;
  timecards: {
    __typename: "ModelTimecardConnection";
    items: Array<{
      __typename: "Timecard";
      id: string;
      title: string | null;
      startDateTime: string | null;
      endDateTime: string | null;
      timeDifference: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnCreateTimecardSubscription = {
  __typename: string;
  id: string;
  title: string | null;
  startDateTime: string | null;
  endDateTime: string | null;
  timeDifference: string | null;
  fromTimeSheet: {
    __typename: "Timesheet";
    id: string;
    title: string;
    owner: {
      __typename: "User";
      uuid: string;
      username: string;
      email: string;
      phone: string;
    };
    permitted_users_id: Array<{
      __typename: "User";
      uuid: string;
      username: string;
      email: string;
      phone: string;
    } | null> | null;
    timecards: {
      __typename: "ModelTimecardConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type OnUpdateTimecardSubscription = {
  __typename: string;
  id: string;
  title: string | null;
  startDateTime: string | null;
  endDateTime: string | null;
  timeDifference: string | null;
  fromTimeSheet: {
    __typename: "Timesheet";
    id: string;
    title: string;
    owner: {
      __typename: "User";
      uuid: string;
      username: string;
      email: string;
      phone: string;
    };
    permitted_users_id: Array<{
      __typename: "User";
      uuid: string;
      username: string;
      email: string;
      phone: string;
    } | null> | null;
    timecards: {
      __typename: "ModelTimecardConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type OnDeleteTimecardSubscription = {
  __typename: string;
  id: string;
  title: string | null;
  startDateTime: string | null;
  endDateTime: string | null;
  timeDifference: string | null;
  fromTimeSheet: {
    __typename: "Timesheet";
    id: string;
    title: string;
    owner: {
      __typename: "User";
      uuid: string;
      username: string;
      email: string;
      phone: string;
    };
    permitted_users_id: Array<{
      __typename: "User";
      uuid: string;
      username: string;
      email: string;
      phone: string;
    } | null> | null;
    timecards: {
      __typename: "ModelTimecardConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateUser(input: CreateUserInput): Promise<CreateUserMutation> {
    const statement = `mutation CreateUser($input: CreateUserInput!) {
        createUser(input: $input) {
          __typename
          uuid
          username
          email
          phone
          timesheets {
            __typename
            items {
              __typename
              id
              title
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateUserMutation>response.data.createUser;
  }
  async UpdateUser(input: UpdateUserInput): Promise<UpdateUserMutation> {
    const statement = `mutation UpdateUser($input: UpdateUserInput!) {
        updateUser(input: $input) {
          __typename
          uuid
          username
          email
          phone
          timesheets {
            __typename
            items {
              __typename
              id
              title
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateUserMutation>response.data.updateUser;
  }
  async DeleteUser(input: DeleteUserInput): Promise<DeleteUserMutation> {
    const statement = `mutation DeleteUser($input: DeleteUserInput!) {
        deleteUser(input: $input) {
          __typename
          uuid
          username
          email
          phone
          timesheets {
            __typename
            items {
              __typename
              id
              title
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteUserMutation>response.data.deleteUser;
  }
  async CreateTimesheet(
    input: CreateTimesheetInput
  ): Promise<CreateTimesheetMutation> {
    const statement = `mutation CreateTimesheet($input: CreateTimesheetInput!) {
        createTimesheet(input: $input) {
          __typename
          id
          title
          owner {
            __typename
            uuid
            username
            email
            phone
            timesheets {
              __typename
              nextToken
            }
          }
          permitted_users_id {
            __typename
            uuid
            username
            email
            phone
            timesheets {
              __typename
              nextToken
            }
          }
          timecards {
            __typename
            items {
              __typename
              id
              title
              startDateTime
              endDateTime
              timeDifference
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTimesheetMutation>response.data.createTimesheet;
  }
  async UpdateTimesheet(
    input: UpdateTimesheetInput
  ): Promise<UpdateTimesheetMutation> {
    const statement = `mutation UpdateTimesheet($input: UpdateTimesheetInput!) {
        updateTimesheet(input: $input) {
          __typename
          id
          title
          owner {
            __typename
            uuid
            username
            email
            phone
            timesheets {
              __typename
              nextToken
            }
          }
          permitted_users_id {
            __typename
            uuid
            username
            email
            phone
            timesheets {
              __typename
              nextToken
            }
          }
          timecards {
            __typename
            items {
              __typename
              id
              title
              startDateTime
              endDateTime
              timeDifference
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTimesheetMutation>response.data.updateTimesheet;
  }
  async DeleteTimesheet(
    input: DeleteTimesheetInput
  ): Promise<DeleteTimesheetMutation> {
    const statement = `mutation DeleteTimesheet($input: DeleteTimesheetInput!) {
        deleteTimesheet(input: $input) {
          __typename
          id
          title
          owner {
            __typename
            uuid
            username
            email
            phone
            timesheets {
              __typename
              nextToken
            }
          }
          permitted_users_id {
            __typename
            uuid
            username
            email
            phone
            timesheets {
              __typename
              nextToken
            }
          }
          timecards {
            __typename
            items {
              __typename
              id
              title
              startDateTime
              endDateTime
              timeDifference
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTimesheetMutation>response.data.deleteTimesheet;
  }
  async CreateTimecard(
    input: CreateTimecardInput
  ): Promise<CreateTimecardMutation> {
    const statement = `mutation CreateTimecard($input: CreateTimecardInput!) {
        createTimecard(input: $input) {
          __typename
          id
          title
          startDateTime
          endDateTime
          timeDifference
          fromTimeSheet {
            __typename
            id
            title
            owner {
              __typename
              uuid
              username
              email
              phone
            }
            permitted_users_id {
              __typename
              uuid
              username
              email
              phone
            }
            timecards {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTimecardMutation>response.data.createTimecard;
  }
  async UpdateTimecard(
    input: UpdateTimecardInput
  ): Promise<UpdateTimecardMutation> {
    const statement = `mutation UpdateTimecard($input: UpdateTimecardInput!) {
        updateTimecard(input: $input) {
          __typename
          id
          title
          startDateTime
          endDateTime
          timeDifference
          fromTimeSheet {
            __typename
            id
            title
            owner {
              __typename
              uuid
              username
              email
              phone
            }
            permitted_users_id {
              __typename
              uuid
              username
              email
              phone
            }
            timecards {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTimecardMutation>response.data.updateTimecard;
  }
  async DeleteTimecard(
    input: DeleteTimecardInput
  ): Promise<DeleteTimecardMutation> {
    const statement = `mutation DeleteTimecard($input: DeleteTimecardInput!) {
        deleteTimecard(input: $input) {
          __typename
          id
          title
          startDateTime
          endDateTime
          timeDifference
          fromTimeSheet {
            __typename
            id
            title
            owner {
              __typename
              uuid
              username
              email
              phone
            }
            permitted_users_id {
              __typename
              uuid
              username
              email
              phone
            }
            timecards {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTimecardMutation>response.data.deleteTimecard;
  }
  async GetUser(id: string): Promise<GetUserQuery> {
    const statement = `query GetUser($id: ID!) {
        getUser(id: $id) {
          __typename
          uuid
          username
          email
          phone
          timesheets {
            __typename
            items {
              __typename
              id
              title
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetUserQuery>response.data.getUser;
  }
  async ListUsers(
    filter?: ModelUserFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListUsersQuery> {
    const statement = `query ListUsers($filter: ModelUserFilterInput, $limit: Int, $nextToken: String) {
        listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            uuid
            username
            email
            phone
            timesheets {
              __typename
              nextToken
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListUsersQuery>response.data.listUsers;
  }
  async GetTimesheet(id: string): Promise<GetTimesheetQuery> {
    const statement = `query GetTimesheet($id: ID!) {
        getTimesheet(id: $id) {
          __typename
          id
          title
          owner {
            __typename
            uuid
            username
            email
            phone
            timesheets {
              __typename
              nextToken
            }
          }
          permitted_users_id {
            __typename
            uuid
            username
            email
            phone
            timesheets {
              __typename
              nextToken
            }
          }
          timecards {
            __typename
            items {
              __typename
              id
              title
              startDateTime
              endDateTime
              timeDifference
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTimesheetQuery>response.data.getTimesheet;
  }
  async ListTimesheets(
    filter?: ModelTimesheetFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTimesheetsQuery> {
    const statement = `query ListTimesheets($filter: ModelTimesheetFilterInput, $limit: Int, $nextToken: String) {
        listTimesheets(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            owner {
              __typename
              uuid
              username
              email
              phone
            }
            permitted_users_id {
              __typename
              uuid
              username
              email
              phone
            }
            timecards {
              __typename
              nextToken
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTimesheetsQuery>response.data.listTimesheets;
  }
  async GetTimecard(id: string): Promise<GetTimecardQuery> {
    const statement = `query GetTimecard($id: ID!) {
        getTimecard(id: $id) {
          __typename
          id
          title
          startDateTime
          endDateTime
          timeDifference
          fromTimeSheet {
            __typename
            id
            title
            owner {
              __typename
              uuid
              username
              email
              phone
            }
            permitted_users_id {
              __typename
              uuid
              username
              email
              phone
            }
            timecards {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTimecardQuery>response.data.getTimecard;
  }
  async ListTimecards(
    filter?: ModelTimecardFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTimecardsQuery> {
    const statement = `query ListTimecards($filter: ModelTimecardFilterInput, $limit: Int, $nextToken: String) {
        listTimecards(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            startDateTime
            endDateTime
            timeDifference
            fromTimeSheet {
              __typename
              id
              title
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTimecardsQuery>response.data.listTimecards;
  }
  OnCreateUserListener: Observable<OnCreateUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateUser {
        onCreateUser {
          __typename
          uuid
          username
          email
          phone
          timesheets {
            __typename
            items {
              __typename
              id
              title
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnCreateUserSubscription>;

  OnUpdateUserListener: Observable<OnUpdateUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateUser {
        onUpdateUser {
          __typename
          uuid
          username
          email
          phone
          timesheets {
            __typename
            items {
              __typename
              id
              title
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnUpdateUserSubscription>;

  OnDeleteUserListener: Observable<OnDeleteUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteUser {
        onDeleteUser {
          __typename
          uuid
          username
          email
          phone
          timesheets {
            __typename
            items {
              __typename
              id
              title
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnDeleteUserSubscription>;

  OnCreateTimesheetListener: Observable<
    OnCreateTimesheetSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateTimesheet {
        onCreateTimesheet {
          __typename
          id
          title
          owner {
            __typename
            uuid
            username
            email
            phone
            timesheets {
              __typename
              nextToken
            }
          }
          permitted_users_id {
            __typename
            uuid
            username
            email
            phone
            timesheets {
              __typename
              nextToken
            }
          }
          timecards {
            __typename
            items {
              __typename
              id
              title
              startDateTime
              endDateTime
              timeDifference
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnCreateTimesheetSubscription>;

  OnUpdateTimesheetListener: Observable<
    OnUpdateTimesheetSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTimesheet {
        onUpdateTimesheet {
          __typename
          id
          title
          owner {
            __typename
            uuid
            username
            email
            phone
            timesheets {
              __typename
              nextToken
            }
          }
          permitted_users_id {
            __typename
            uuid
            username
            email
            phone
            timesheets {
              __typename
              nextToken
            }
          }
          timecards {
            __typename
            items {
              __typename
              id
              title
              startDateTime
              endDateTime
              timeDifference
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnUpdateTimesheetSubscription>;

  OnDeleteTimesheetListener: Observable<
    OnDeleteTimesheetSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteTimesheet {
        onDeleteTimesheet {
          __typename
          id
          title
          owner {
            __typename
            uuid
            username
            email
            phone
            timesheets {
              __typename
              nextToken
            }
          }
          permitted_users_id {
            __typename
            uuid
            username
            email
            phone
            timesheets {
              __typename
              nextToken
            }
          }
          timecards {
            __typename
            items {
              __typename
              id
              title
              startDateTime
              endDateTime
              timeDifference
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnDeleteTimesheetSubscription>;

  OnCreateTimecardListener: Observable<
    OnCreateTimecardSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateTimecard {
        onCreateTimecard {
          __typename
          id
          title
          startDateTime
          endDateTime
          timeDifference
          fromTimeSheet {
            __typename
            id
            title
            owner {
              __typename
              uuid
              username
              email
              phone
            }
            permitted_users_id {
              __typename
              uuid
              username
              email
              phone
            }
            timecards {
              __typename
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnCreateTimecardSubscription>;

  OnUpdateTimecardListener: Observable<
    OnUpdateTimecardSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTimecard {
        onUpdateTimecard {
          __typename
          id
          title
          startDateTime
          endDateTime
          timeDifference
          fromTimeSheet {
            __typename
            id
            title
            owner {
              __typename
              uuid
              username
              email
              phone
            }
            permitted_users_id {
              __typename
              uuid
              username
              email
              phone
            }
            timecards {
              __typename
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnUpdateTimecardSubscription>;

  OnDeleteTimecardListener: Observable<
    OnDeleteTimecardSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteTimecard {
        onDeleteTimecard {
          __typename
          id
          title
          startDateTime
          endDateTime
          timeDifference
          fromTimeSheet {
            __typename
            id
            title
            owner {
              __typename
              uuid
              username
              email
              phone
            }
            permitted_users_id {
              __typename
              uuid
              username
              email
              phone
            }
            timecards {
              __typename
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnDeleteTimecardSubscription>;
}
