# GetResourceUserRequest

## Example Usage

```typescript
import { GetResourceUserRequest } from "opal-mcp/models/operations";

let value: GetResourceUserRequest = {
  resourceId: "32acc112-21ff-4669-91c2-21e27683eaa1",
  userId: "29827fb8-f2dd-4e80-9576-28e31e9934ac",
  cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `resourceId`                                             | *string*                                                 | :heavy_check_mark:                                       | The ID of the resource.                                  | 32acc112-21ff-4669-91c2-21e27683eaa1                     |
| `userId`                                                 | *string*                                                 | :heavy_check_mark:                                       | The ID of the user.                                      | 29827fb8-f2dd-4e80-9576-28e31e9934ac                     |
| `cursor`                                                 | *string*                                                 | :heavy_minus_sign:                                       | The pagination cursor value.                             | cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw |