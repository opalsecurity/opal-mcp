# GetUserResourcesRequest

## Example Usage

```typescript
import { GetUserResourcesRequest } from "opal-mcp/models/operations";

let value: GetUserResourcesRequest = {
  userId: "4baf8423-db0a-4037-a4cf-f79c60cb67a5",
  limit: 200,
  cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
  includeUnmanaged: false,
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `userId`                                                 | *string*                                                 | :heavy_check_mark:                                       | The ID of the user.                                      | 4baf8423-db0a-4037-a4cf-f79c60cb67a5                     |
| `limit`                                                  | *number*                                                 | :heavy_minus_sign:                                       | Limit the number of results returned.                    | 200                                                      |
| `cursor`                                                 | *string*                                                 | :heavy_minus_sign:                                       | The pagination cursor value.                             | cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw |
| `includeUnmanaged`                                       | *boolean*                                                | :heavy_minus_sign:                                       | Include user's access to unmanaged resources.            | false                                                    |