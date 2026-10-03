# AzureStorageContainer

Remote info for Azure storage container.

## Example Usage

```typescript
import { AzureStorageContainer } from "opal-mcp/models/components";

let value: AzureStorageContainer = {
  resourceId:
    "/subscriptions/0000/resourceGroups/rg/providers/Microsoft.Storage/storageAccounts/sa01/blobServices/default/containers/c01",
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                | Example                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `resourceId`                                                                                                               | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | The ARM resource ID of the storage container.                                                                              | /subscriptions/0000/resourceGroups/rg/providers/Microsoft.Storage/storageAccounts/sa01/blobServices/default/containers/c01 |