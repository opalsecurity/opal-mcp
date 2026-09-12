# GetGroupContainingGroupsRequest

## Example Usage

```typescript
import { GetGroupContainingGroupsRequest } from "opal-mcp/models/operations";

let value: GetGroupContainingGroupsRequest = {
  groupId: "4baf8423-db0a-4037-a4cf-f79c60cb67a5",
  accessLevelRemoteId: "arn:aws:iam::590304332660:role/AdministratorAccess",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        | Example                                            |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `groupId`                                          | *string*                                           | :heavy_check_mark:                                 | The ID of the group.                               | 4baf8423-db0a-4037-a4cf-f79c60cb67a5               |
| `accessLevelRemoteId`                              | *string*                                           | :heavy_minus_sign:                                 | The access level's remote ID to filter by.         | arn:aws:iam::590304332660:role/AdministratorAccess |