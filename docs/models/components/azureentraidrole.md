# AzureEntraIdRole

Remote info for Azure Entra ID role.

## Example Usage

```typescript
import { AzureEntraIdRole } from "opal-mcp/models/components";

let value: AzureEntraIdRole = {
  resourceId: "11111111-2222-3333-4444-555555555555",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        | Example                                            |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `resourceId`                                       | *string*                                           | :heavy_check_mark:                                 | The remote role identifier from Entra (object ID). | 11111111-2222-3333-4444-555555555555               |