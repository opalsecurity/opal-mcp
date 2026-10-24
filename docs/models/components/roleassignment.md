# RoleAssignment

A role assignment representing access granted to a principal for an entity.

## Example Usage

```typescript
import { RoleAssignment } from "opal-mcp/models/components";

let value: RoleAssignment = {
  id: "e4ab3353-66b5-4648-a3bb-0dd9f2cc8ea7",
  entityId: "29790c5d-e006-4031-9567-801407d9f279",
  entityType: "GROUP",
  principalId: "15a00de2-8e83-4ed1-93c7-703e344f7f05",
  principalType: "GROUP",
  accessLevel: {
    accessLevelName: "AdminRole",
    accessLevelRemoteId: "arn:aws:iam::590304332660:role/AdministratorAccess",
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          | Example                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                 | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | Unique identifier for the role assignment.                                                                           |                                                                                                                      |
| `entityId`                                                                                                           | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The ID of the entity (resource or group) being accessed.                                                             |                                                                                                                      |
| `entityType`                                                                                                         | [components.EntityTypeEnum](../../models/components/entitytypeenum.md)                                               | :heavy_check_mark:                                                                                                   | The type of an entity.                                                                                               | GROUP                                                                                                                |
| `principalId`                                                                                                        | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The ID of the principal being granted access.                                                                        |                                                                                                                      |
| `principalType`                                                                                                      | [components.EntityTypeEnum](../../models/components/entitytypeenum.md)                                               | :heavy_check_mark:                                                                                                   | The type of an entity.                                                                                               | GROUP                                                                                                                |
| `accessLevel`                                                                                                        | [components.RoleAssignmentAccessLevel](../../models/components/roleassignmentaccesslevel.md)                         | :heavy_minus_sign:                                                                                                   | The level of access granted. Null when the entity does not define access levels.                                     | {<br/>"access_level_name": "AdminRole",<br/>"access_level_remote_id": "arn:aws:iam::590304332660:role/AdministratorAccess"<br/>} |
| `expiration`                                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                        | :heavy_minus_sign:                                                                                                   | When this access expires. Null when the grant is indefinite.                                                         |                                                                                                                      |
| `grantedAt`                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                        | :heavy_minus_sign:                                                                                                   | When this access was first granted.                                                                                  |                                                                                                                      |