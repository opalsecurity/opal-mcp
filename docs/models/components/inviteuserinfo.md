# InviteUserInfo

The information required to invite a user.

## Example Usage

```typescript
import { InviteUserInfo } from "opal-mcp/models/components";

let value: InviteUserInfo = {
  email: "Reyna.Lynch17@gmail.com",
  firstName: "Cierra",
  lastName: "Cummings",
  role: "ADMIN",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `email`                                                                          | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `firstName`                                                                      | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `lastName`                                                                       | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `role`                                                                           | [components.UserProductRoleEnum](../../models/components/userproductroleenum.md) | :heavy_check_mark:                                                               | The product role assigned to a user.                                             |