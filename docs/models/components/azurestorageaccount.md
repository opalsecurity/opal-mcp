# AzureStorageAccount

Remote info for Azure storage account.

## Example Usage

```typescript
import { AzureStorageAccount } from "opal-mcp/models/components";

let value: AzureStorageAccount = {
  resourceId:
    "/subscriptions/0000/resourceGroups/rg/providers/Microsoft.Storage/storageAccounts/sa01",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `resourceId`                                                                           | *string*                                                                               | :heavy_check_mark:                                                                     | The ARM resource ID of the storage account.                                            | /subscriptions/0000/resourceGroups/rg/providers/Microsoft.Storage/storageAccounts/sa01 |