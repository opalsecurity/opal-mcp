# CreateDelegationRequest

Request body for creating a new delegation of access review requests from one user to another.

## Example Usage

```typescript
import { CreateDelegationRequest } from "opal-mcp/models/components";

let value: CreateDelegationRequest = {
  delegatorUserId: "123e4567-e89b-12d3-a456-426614174000",
  delegateUserId: "7c86c85d-0651-43e2-a748-d69d658418e8",
  startTime: new Date("2023-10-01T12:00:00Z"),
  endTime: new Date("2023-10-01T12:00:00Z"),
  reason: "I need to be out of the office",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `delegatorUserId`                                                                             | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the user delegating their access review requests.                                   | 123e4567-e89b-12d3-a456-426614174000                                                          |
| `delegateUserId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the user being delegated to.                                                        | 7c86c85d-0651-43e2-a748-d69d658418e8                                                          |
| `startTime`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The start time of the delegation.                                                             | 2023-10-01 12:00:00 +0000 UTC                                                                 |
| `endTime`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The end time of the delegation.                                                               | 2023-10-01 12:00:00 +0000 UTC                                                                 |
| `reason`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | The reason for the delegation.                                                                | I need to be out of the office                                                                |