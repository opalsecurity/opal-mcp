# UserList

A list of users.

## Example Usage

```typescript
import { UserList } from "opal-mcp/models/components";

let value: UserList = {
  users: [
    {
      userId: "29827fb8-f2dd-4e80-9576-28e31e9934ac",
      email: "john.doe@company.dev",
      fullName: "John Doe",
      firstName: "John",
      lastName: "Doe",
      position: "Engineer",
    },
  ],
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `users`                                              | [components.User](../../models/components/user.md)[] | :heavy_check_mark:                                   | N/A                                                  |