# AddRoleAssignmentInput

A single role assignment to create in a batch add request.

## Example Usage

```typescript
import { AddRoleAssignmentInput } from "opal-mcp/models/components";

let value: AddRoleAssignmentInput = {
  entityId: "1b978423-db0a-4037-a4cf-f79c60cb67b3",
  entityType: "GROUP",
  principalId: "29827fb8-f2dd-4e80-9576-28e31e9934ac",
  principalType: "GROUP",
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             | Example                                                                                                 |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `entityId`                                                                                              | *string*                                                                                                | :heavy_check_mark:                                                                                      | The ID of the entity (resource or group) being accessed.                                                | 1b978423-db0a-4037-a4cf-f79c60cb67b3                                                                    |
| `entityType`                                                                                            | [components.EntityTypeEnum](../../models/components/entitytypeenum.md)                                  | :heavy_check_mark:                                                                                      | The type of the entity being accessed. Must be `RESOURCE` or `GROUP`.                                   | GROUP                                                                                                   |
| `principalId`                                                                                           | *string*                                                                                                | :heavy_check_mark:                                                                                      | The ID of the principal (user, group, or resource) being granted access.                                | 29827fb8-f2dd-4e80-9576-28e31e9934ac                                                                    |
| `principalType`                                                                                         | [components.EntityTypeEnum](../../models/components/entitytypeenum.md)                                  | :heavy_check_mark:                                                                                      | The type of the principal being granted access. Must be `RESOURCE`, `GROUP`, or `USER`.                 | GROUP                                                                                                   |
| `accessLevelRemoteId`                                                                                   | *string*                                                                                                | :heavy_minus_sign:                                                                                      | Remote ID of the access level to grant. Omit for entities that only have a single default access level. |                                                                                                         |
| `durationMinutes`                                                                                       | *number*                                                                                                | :heavy_minus_sign:                                                                                      | Duration of the grant in minutes. Omit or send `0` for an indefinite grant.                             |                                                                                                         |