# UserRequest

## Example Usage

```typescript
import { UserRequest } from "opal-mcp/models/operations";

let value: UserRequest = {
  userId: "32acc112-21ff-4669-91c2-21e27683eaa1",
  email: "johndoe@domain.org",
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                | Example                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `userId`                                                                                                                                   | *string*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | The user ID of the user.                                                                                                                   | 32acc112-21ff-4669-91c2-21e27683eaa1                                                                                                       |
| `email`                                                                                                                                    | *string*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | The email of the user. If both user ID and email are provided, user ID will take precedence. If neither are provided, an error will occur. | johndoe@domain.org                                                                                                                         |