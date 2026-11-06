# RemoveGroupContainingGroupRequest

## Example Usage

```typescript
import { RemoveGroupContainingGroupRequest } from "opal-mcp/models/operations";

let value: RemoveGroupContainingGroupRequest = {
  groupId: "4baf8423-db0a-4037-a4cf-f79c60cb67a5",
  containingGroupId: "4baf8423-db0a-4037-a4cf-f79c60cb67a5",
  accessLevelRemoteId: "arn:aws:iam::590304332660:role/AdministratorAccess",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `groupId`                                                      | *string*                                                       | :heavy_check_mark:                                             | The ID of the member group to remove.                          | 4baf8423-db0a-4037-a4cf-f79c60cb67a5                           |
| `containingGroupId`                                            | *string*                                                       | :heavy_check_mark:                                             | The ID of the containing group.                                | 4baf8423-db0a-4037-a4cf-f79c60cb67a5                           |
| `accessLevelRemoteId`                                          | *string*                                                       | :heavy_minus_sign:                                             | The remote ID of the member group's access level to filter by. | arn:aws:iam::590304332660:role/AdministratorAccess             |