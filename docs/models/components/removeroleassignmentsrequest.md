# RemoveRoleAssignmentsRequest

Request body for `DELETE /role-assignments`.

## Example Usage

```typescript
import { RemoveRoleAssignmentsRequest } from "opal-mcp/models/components";

let value: RemoveRoleAssignmentsRequest = {
  roleAssignments: [],
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `roleAssignments`                                                                              | [components.RemoveRoleAssignmentInput](../../models/components/removeroleassignmentinput.md)[] | :heavy_check_mark:                                                                             | N/A                                                                                            |