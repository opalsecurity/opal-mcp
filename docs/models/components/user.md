# User

# User Object
### Description
The `User` object is used to represent a user.

### Usage Example
Fetch from the `LIST Sessions` endpoint.

## Example Usage

```typescript
import { User } from "opal-mcp/models/components";

let value: User = {
  userId: "29827fb8-f2dd-4e80-9576-28e31e9934ac",
  email: "john.doe@company.dev",
  fullName: "John Doe",
  firstName: "John",
  lastName: "Doe",
  position: "Engineer",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `userId`                                                                         | *string*                                                                         | :heavy_check_mark:                                                               | The ID of the user.                                                              | h0z968412-2451-4bbd-42h4-057l715d917m                                            |
| `email`                                                                          | *string*                                                                         | :heavy_check_mark:                                                               | The email of the user.                                                           | john.doe@company.dev                                                             |
| `fullName`                                                                       | *string*                                                                         | :heavy_check_mark:                                                               | The full name of the user.                                                       | John Doe                                                                         |
| `firstName`                                                                      | *string*                                                                         | :heavy_check_mark:                                                               | The first name of the user.                                                      | John                                                                             |
| `lastName`                                                                       | *string*                                                                         | :heavy_check_mark:                                                               | The last name of the user.                                                       | Doe                                                                              |
| `position`                                                                       | *string*                                                                         | :heavy_check_mark:                                                               | The user's position.                                                             | Senior Engineer                                                                  |
| `hrIdpStatus`                                                                    | [components.UserHrIdpStatusEnum](../../models/components/userhridpstatusenum.md) | :heavy_minus_sign:                                                               | User status pulled from an HR/IDP provider.                                      | ACTIVE                                                                           |