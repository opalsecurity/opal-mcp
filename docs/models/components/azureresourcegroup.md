# AzureResourceGroup

Remote info for Azure resource group.

## Example Usage

```typescript
import { AzureResourceGroup } from "opal-mcp/models/components";

let value: AzureResourceGroup = {
  resourceId:
    "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/my-rg",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `resourceId`                                                             | *string*                                                                 | :heavy_check_mark:                                                       | The ARM resource ID of the resource group.                               | /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/my-rg |