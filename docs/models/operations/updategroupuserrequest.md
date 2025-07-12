# UpdateGroupUserRequest

## Example Usage

```typescript
import { UpdateGroupUserRequest } from "opal-mcp/models/operations";

let value: UpdateGroupUserRequest = {
  groupId: "4baf8423-db0a-4037-a4cf-f79c60cb67a5",
  userId: "f92aa855-cea9-4814-b9d8-f2a60d3e4a06",
  requestBody: {
    durationMinutes: 60,
    accessLevelRemoteId: "arn:aws:iam::590304332660:role/AdministratorAccess",
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                | Example                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `groupId`                                                                                                  | *string*                                                                                                   | :heavy_check_mark:                                                                                         | The ID of the group.                                                                                       | 4baf8423-db0a-4037-a4cf-f79c60cb67a5                                                                       |
| `userId`                                                                                                   | *string*                                                                                                   | :heavy_check_mark:                                                                                         | The ID of the user whose access is being updated.                                                          | f92aa855-cea9-4814-b9d8-f2a60d3e4a06                                                                       |
| `requestBody`                                                                                              | [operations.UpdateGroupUserRequestBody](../../models/operations/updategroupuserrequestbody.md)             | :heavy_check_mark:                                                                                         | N/A                                                                                                        | {<br/>"duration_minutes": 60,<br/>"access_level_remote_id": "arn:aws:iam::590304332660:role/AdministratorAccess"<br/>} |