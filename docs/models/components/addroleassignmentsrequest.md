# AddRoleAssignmentsRequest

Request body for `POST /role-assignments`.

## Example Usage

```typescript
import { AddRoleAssignmentsRequest } from "opal-mcp/models/components";

let value: AddRoleAssignmentsRequest = {
  roleAssignments: [
    {
      entityId: "1b978423-db0a-4037-a4cf-f79c60cb67b3",
      entityType: "GROUP",
      principalId: "29827fb8-f2dd-4e80-9576-28e31e9934ac",
      principalType: "GROUP",
    },
  ],
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `roleAssignments`                                                                        | [components.AddRoleAssignmentInput](../../models/components/addroleassignmentinput.md)[] | :heavy_check_mark:                                                                       | The list of role assignments to add.                                                     |