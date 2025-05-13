# SessionsRequest

## Example Usage

```typescript
import { SessionsRequest } from "opal-mcp/models/operations";

let value: SessionsRequest = {
  resourceId: "1b978423-db0a-4037-a4cf-f79c60cb67b3",
  userId: "32acc112-21ff-4669-91c2-21e27683eaa1",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        | Example                                            |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `resourceId`                                       | *string*                                           | :heavy_check_mark:                                 | The ID of the resource.                            | 1b978423-db0a-4037-a4cf-f79c60cb67b3               |
| `userId`                                           | *string*                                           | :heavy_minus_sign:                                 | The ID of the user you wish to query sessions for. | 32acc112-21ff-4669-91c2-21e27683eaa1               |