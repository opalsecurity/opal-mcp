# RemoveRoleAssignmentsEntry

A single revoked role assignment in a `RemoveRoleAssignmentsResponse`.

## Example Usage

```typescript
import { RemoveRoleAssignmentsEntry } from "opal-mcp/models/components";

let value: RemoveRoleAssignmentsEntry = {
  roleAssignment: {
    id: "cd5e4ae0-eb17-47ad-b415-12d9e86cbc37",
    entityId: "149c1af7-2b73-4070-9096-dfae8aa71f32",
    entityType: "GROUP",
    principalId: "aae02492-ebc1-449a-9a7c-58cc627861d9",
    principalType: "GROUP",
    accessLevel: {
      accessLevelName: "AdminRole",
      accessLevelRemoteId: "arn:aws:iam::590304332660:role/AdministratorAccess",
    },
  },
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `roleAssignment`                                                            | [components.RoleAssignment](../../models/components/roleassignment.md)      | :heavy_check_mark:                                                          | A role assignment representing access granted to a principal for an entity. |