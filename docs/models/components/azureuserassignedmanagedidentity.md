# AzureUserAssignedManagedIdentity

Remote info for Azure user assigned managed identity.

## Example Usage

```typescript
import { AzureUserAssignedManagedIdentity } from "opal-mcp/models/components";

let value: AzureUserAssignedManagedIdentity = {
  resourceId:
    "/subscriptions/0000/resourceGroups/rg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/id01",
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           | Example                                                                                               |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `resourceId`                                                                                          | *string*                                                                                              | :heavy_check_mark:                                                                                    | The ARM resource ID of the user assigned managed identity.                                            | /subscriptions/0000/resourceGroups/rg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/id01 |