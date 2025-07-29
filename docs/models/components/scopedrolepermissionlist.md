# ScopedRolePermissionList

## Example Usage

```typescript
import { ScopedRolePermissionList } from "opal-mcp/models/components";

let value: ScopedRolePermissionList = {
  permissions: [
    {
      targetIds: [
        "a381e7a3-e5e0-4c48-b1d6-4ccb4c191bc1",
        "8294e9c9-deb6-48e9-9c99-da2a1e04a87f",
      ],
      targetType: "RESOURCE",
      permissionName: "READ",
      allowAll: true,
    },
  ],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `permissions`                                                                        | [components.ScopedRolePermission](../../models/components/scopedrolepermission.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |