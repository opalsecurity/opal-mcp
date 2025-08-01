# RequestT

# Request Object
### Description
The `Request` object is used to represent a request.

### Usage Example
Returned from the `GET Requests` endpoint.

## Example Usage

```typescript
import { RequestT } from "opal-mcp/models/components";

let value: RequestT = {
  id: "7c86c85d-0651-43e2-a748-d69d658418e8",
  createdAt: new Date("2021-01-06T20:00:00Z"),
  updatedAt: new Date("2021-01-06T20:00:00Z"),
  requesterId: "c86c85d-0651-43e2-a748-d69d658418e8",
  targetUserId: "r86c85d-0651-43e2-a748-d69d658418e8",
  targetGroupId: "r86c85d-0651-43e2-a748-d69d658418e8",
  status: "DENIED",
  reason: "I need this resource.",
  durationMinutes: 1440,
  stages: {
    requestedRoleName: "Admin",
    requestedItemName: "AWS Production Account",
    stages: [
      {
        stage: 1,
        operator: "AND",
        reviewers: [
          {
            id: "7c86c85d-0651-43e2-a748-d69d658418e8",
            status: "PENDING",
          },
        ],
      },
      {
        stage: 2,
        operator: "OR",
        reviewers: [
          {
            id: "8d86c85d-0651-43e2-a748-d69d658418e9",
            status: "APPROVED",
          },
        ],
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                                                                 | Type                                                                                                                                                                  | Required                                                                                                                                                              | Description                                                                                                                                                           | Example                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                  | *string*                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                    | The unique identifier of the request.                                                                                                                                 | 7c86c85d-0651-43e2-a748-d69d658418e8                                                                                                                                  |
| `createdAt`                                                                                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                         | :heavy_check_mark:                                                                                                                                                    | The date and time the request was created.                                                                                                                            | 2021-01-06 20:00:00 +0000 UTC                                                                                                                                         |
| `updatedAt`                                                                                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                         | :heavy_check_mark:                                                                                                                                                    | The date and time the request was last updated.                                                                                                                       | 2021-01-06 20:00:00 +0000 UTC                                                                                                                                         |
| `requesterId`                                                                                                                                                         | *string*                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                    | The unique identifier of the user who created the request.                                                                                                            | 7c86c85d-0651-43e2-a748-d69d658418e8                                                                                                                                  |
| `targetUserId`                                                                                                                                                        | *string*                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                    | The unique identifier of the user who is the target of the request.                                                                                                   | 7c86c85d-0651-43e2-a748-d69d658418e8                                                                                                                                  |
| `targetGroupId`                                                                                                                                                       | *string*                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                    | The unique identifier of the group who is the target of the request.                                                                                                  | 7c86c85d-0651-43e2-a748-d69d658418e8                                                                                                                                  |
| `status`                                                                                                                                                              | [components.RequestStatusEnum](../../models/components/requeststatusenum.md)                                                                                          | :heavy_check_mark:                                                                                                                                                    | # Request Status<br/>### Description<br/>The `RequestStatus` enum is used to represent the status of a request.<br/><br/>### Usage Example<br/>Returned from the `GET Requests` endpoint. | PENDING                                                                                                                                                               |
| `reason`                                                                                                                                                              | *string*                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                    | The reason for the request.                                                                                                                                           | I need access to the AWS account.                                                                                                                                     |
| `durationMinutes`                                                                                                                                                     | *number*                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                    | The duration of the request in minutes.                                                                                                                               | 120                                                                                                                                                                   |
| `requestedItemsList`                                                                                                                                                  | [components.RequestedItem](../../models/components/requesteditem.md)[]                                                                                                | :heavy_minus_sign:                                                                                                                                                    | The list of targets for the request.                                                                                                                                  |                                                                                                                                                                       |
| `customFieldsResponses`                                                                                                                                               | [components.RequestCustomFieldResponse](../../models/components/requestcustomfieldresponse.md)[]                                                                      | :heavy_minus_sign:                                                                                                                                                    | The responses given to the custom fields associated to the request                                                                                                    |                                                                                                                                                                       |
| `stages`                                                                                                                                                              | [components.RequestItemStages](../../models/components/requestitemstages.md)                                                                                          | :heavy_minus_sign:                                                                                                                                                    | The stages configuration for a request item                                                                                                                           |                                                                                                                                                                       |