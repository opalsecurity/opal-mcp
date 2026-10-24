# AddRoleAssignmentsResponse

Response body for `POST /role-assignments`.

## Example Usage

```typescript
import { AddRoleAssignmentsResponse } from "opal-mcp/models/components";

let value: AddRoleAssignmentsResponse = {
  taskIds: [],
  entries: [
    {
      roleAssignment: {
        id: "cd5e4ae0-eb17-47ad-b415-12d9e86cbc37",
        entityId: "149c1af7-2b73-4070-9096-dfae8aa71f32",
        entityType: "GROUP",
        principalId: "aae02492-ebc1-449a-9a7c-58cc627861d9",
        principalType: "GROUP",
        accessLevel: {
          accessLevelName: "AdminRole",
          accessLevelRemoteId:
            "arn:aws:iam::590304332660:role/AdministratorAccess",
        },
      },
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                                                              | Type                                                                                                                                                                                                               | Required                                                                                                                                                                                                           | Description                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `taskIds`                                                                                                                                                                                                          | *string*[]                                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                                 | Opaque IDs of push tasks enqueued to propagate the new assignments to end systems. Each ID is a base64-encoded, URL-safe string that mirrors the identifier returned by the GraphQL `addRoleAssignments` mutation. |
| `entries`                                                                                                                                                                                                          | [components.AddRoleAssignmentsEntry](../../models/components/addroleassignmentsentry.md)[]                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                                 | One entry per role assignment created, in request order.                                                                                                                                                           |