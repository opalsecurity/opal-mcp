# UpdateUserRequest

## Example Usage

```typescript
import { UpdateUserRequest } from "opal-mcp/models/operations";

let value: UpdateUserRequest = {
  userId: "446b9490-c6c2-4f8e-8482-766d56e5003a",
  updateUserInfo: {},
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `userId`                                                               | *string*                                                               | :heavy_check_mark:                                                     | The ID of the user to update.                                          |
| `updateUserInfo`                                                       | [components.UpdateUserInfo](../../models/components/updateuserinfo.md) | :heavy_check_mark:                                                     | N/A                                                                    |