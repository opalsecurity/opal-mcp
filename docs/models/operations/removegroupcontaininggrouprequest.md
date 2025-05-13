# RemoveGroupContainingGroupRequest

## Example Usage

```typescript
import { RemoveGroupContainingGroupRequest } from "opal-mcp/models/operations";

let value: RemoveGroupContainingGroupRequest = {
  groupId: "4baf8423-db0a-4037-a4cf-f79c60cb67a5",
  containingGroupId: "4baf8423-db0a-4037-a4cf-f79c60cb67a5",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `groupId`                            | *string*                             | :heavy_check_mark:                   | The ID of the group.                 | 4baf8423-db0a-4037-a4cf-f79c60cb67a5 |
| `containingGroupId`                  | *string*                             | :heavy_check_mark:                   | The ID of the containing group.      | 4baf8423-db0a-4037-a4cf-f79c60cb67a5 |