# GetResourceUsersRequest

## Example Usage

```typescript
import { GetResourceUsersRequest } from "opal-mcp/models/operations";

let value: GetResourceUsersRequest = {
  resourceId: "4baf8423-db0a-4037-a4cf-f79c60cb67a5",
  limit: 200,
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           | Example                               |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `resourceId`                          | *string*                              | :heavy_check_mark:                    | The ID of the resource.               | 4baf8423-db0a-4037-a4cf-f79c60cb67a5  |
| `limit`                               | *number*                              | :heavy_minus_sign:                    | Limit the number of results returned. | 200                                   |