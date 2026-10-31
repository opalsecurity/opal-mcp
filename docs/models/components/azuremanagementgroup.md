# AzureManagementGroup

Remote info for Azure management group.

## Example Usage

```typescript
import { AzureManagementGroup } from "opal-mcp/models/components";

let value: AzureManagementGroup = {
  resourceId: "/providers/Microsoft.Management/managementGroups/my-mg",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            | Example                                                |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `resourceId`                                           | *string*                                               | :heavy_check_mark:                                     | The ARM resource ID of the management group.           | /providers/Microsoft.Management/managementGroups/my-mg |