# ResetUserMfaRequest

## Example Usage

```typescript
import { ResetUserMfaRequest } from "opal-mcp/models/operations";

let value: ResetUserMfaRequest = {
  userId: "32acc112-21ff-4669-91c2-21e27683eaa1",
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   | Example                                       |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `userId`                                      | *string*                                      | :heavy_check_mark:                            | The ID of the user whose MFA should be reset. | 32acc112-21ff-4669-91c2-21e27683eaa1          |