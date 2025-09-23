# GetGroupUsersRequest

## Example Usage

```typescript
import { GetGroupUsersRequest } from "opal-mcp/models/operations";

let value: GetGroupUsersRequest = {
  groupId: "4baf8423-db0a-4037-a4cf-f79c60cb67a5",
  cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
  pageSize: 200,
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `groupId`                                                | *string*                                                 | :heavy_check_mark:                                       | The ID of the group.                                     | 4baf8423-db0a-4037-a4cf-f79c60cb67a5                     |
| `cursor`                                                 | *string*                                                 | :heavy_minus_sign:                                       | The pagination cursor value.                             | cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw |
| `pageSize`                                               | *number*                                                 | :heavy_minus_sign:                                       | Number of results to return per page. Default is 200.    | 200                                                      |