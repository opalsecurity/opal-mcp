# GetGroupContainingGroupRequest

## Example Usage

```typescript
import { GetGroupContainingGroupRequest } from "opal-mcp/models/operations";

let value: GetGroupContainingGroupRequest = {
  groupId: "4baf8423-db0a-4037-a4cf-f79c60cb67a5",
  containingGroupId: "4baf8423-db0a-4037-a4cf-f79c60cb67a5",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `groupId`                            | *string*                             | :heavy_check_mark:                   | The ID of the group.                 | 4baf8423-db0a-4037-a4cf-f79c60cb67a5 |
| `containingGroupId`                  | *string*                             | :heavy_check_mark:                   | The ID of the containing group.      | 4baf8423-db0a-4037-a4cf-f79c60cb67a5 |