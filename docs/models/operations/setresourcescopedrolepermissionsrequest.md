# SetResourceScopedRolePermissionsRequest

## Example Usage

```typescript
import { SetResourceScopedRolePermissionsRequest } from "opal-mcp/models/operations";

let value: SetResourceScopedRolePermissionsRequest = {
  resourceId: "1b978423-db0a-4037-a4cf-f79c60cb67b3",
  scopedRolePermissionList: {
    permissions: [
      {
        targetIds: [
          "a381e7a3-e5e0-4c48-b1d6-4ccb4c191bc1",
          "8294e9c9-deb6-48e9-9c99-da2a1e04a87f",
        ],
        targetType: "RESOURCE",
        permissionName: "READ",
        allowAll: false,
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                                                                             | Type                                                                                                                                                                              | Required                                                                                                                                                                          | Description                                                                                                                                                                       | Example                                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `resourceId`                                                                                                                                                                      | *string*                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                | The ID of the resource whose scoped role permissions belong to. Must be of OPAL_SCOPED_ROLE resource type.                                                                        | 1b978423-db0a-4037-a4cf-f79c60cb67b3                                                                                                                                              |
| `scopedRolePermissionList`                                                                                                                                                        | [components.ScopedRolePermissionList](../../models/components/scopedrolepermissionlist.md)                                                                                        | :heavy_check_mark:                                                                                                                                                                | N/A                                                                                                                                                                               | {<br/>"permissions": [<br/>{<br/>"target_ids": [<br/>"a381e7a3-e5e0-4c48-b1d6-4ccb4c191bc1",<br/>"8294e9c9-deb6-48e9-9c99-da2a1e04a87f"<br/>],<br/>"target_type": "RESOURCE",<br/>"permission_name": "READ"<br/>}<br/>]<br/>} |