# SetOwnerUsersRequest

## Example Usage

```typescript
import { SetOwnerUsersRequest } from "opal-mcp/models/operations";

let value: SetOwnerUsersRequest = {
  ownerId: "4baf8423-db0a-4037-a4cf-f79c60cb67a5",
  userIDList: {
    userIds: [
      "7870617d-e72a-47f5-a84c-693817ab4567",
      "1520617d-e72a-47f5-a84c-693817ab48ad2",
    ],
  },
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         | Example                                                                                             |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `ownerId`                                                                                           | *string*                                                                                            | :heavy_check_mark:                                                                                  | The ID of the owner.                                                                                | 4baf8423-db0a-4037-a4cf-f79c60cb67a5                                                                |
| `userIDList`                                                                                        | [components.UserIDList](../../models/components/useridlist.md)                                      | :heavy_check_mark:                                                                                  | N/A                                                                                                 | {<br/>"user_ids": [<br/>"7870617d-e72a-47f5-a84c-693817ab4567",<br/>"1520617d-e72a-47f5-a84c-693817ab48ad2"<br/>]<br/>} |