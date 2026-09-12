# GetUserGroupsRequest

## Example Usage

```typescript
import { GetUserGroupsRequest } from "opal-mcp/models/operations";

let value: GetUserGroupsRequest = {
  userId: "1b978423-db0a-4037-a4cf-f79c60cb67b3",
  cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
  pageSize: 200,
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `userId`                                                 | *string*                                                 | :heavy_check_mark:                                       | The ID of the user whose groups to return.               | 1b978423-db0a-4037-a4cf-f79c60cb67b3                     |
| `cursor`                                                 | *string*                                                 | :heavy_minus_sign:                                       | The pagination cursor value.                             | cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw |
| `pageSize`                                               | *number*                                                 | :heavy_minus_sign:                                       | Number of results to return per page. Default is 200.    | 200                                                      |