# ScopedRolePermission

## Example Usage

```typescript
import { ScopedRolePermission } from "opal-mcp/models/components";

let value: ScopedRolePermission = {
  targetIds: [
    "a381e7a3-e5e0-4c48-b1d6-4ccb4c191bc1",
    "8294e9c9-deb6-48e9-9c99-da2a1e04a87f",
  ],
  targetType: "RESOURCE",
  permissionName: "READ",
  allowAll: false,
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              | Example                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `targetIds`                                                                                                              | *string*[]                                                                                                               | :heavy_minus_sign:                                                                                                       | The IDs of the entities that this permission applies to. If empty of missing, the permission will have untargeted scope. | [<br/>"a381e7a3-e5e0-4c48-b1d6-4ccb4c191bc1",<br/>"8294e9c9-deb6-48e9-9c99-da2a1e04a87f"<br/>]                           |
| `targetType`                                                                                                             | [components.RolePermissionTargetTypeEnum](../../models/components/rolepermissiontargettypeenum.md)                       | :heavy_check_mark:                                                                                                       | The type of the target for the role permission.                                                                          | RESOURCE                                                                                                                 |
| `permissionName`                                                                                                         | [components.RolePermissionNameEnum](../../models/components/rolepermissionnameenum.md)                                   | :heavy_check_mark:                                                                                                       | The name of the role permission.                                                                                         | READ                                                                                                                     |
| `allowAll`                                                                                                               | *boolean*                                                                                                                | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |                                                                                                                          |