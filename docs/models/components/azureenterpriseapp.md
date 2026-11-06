# AzureEnterpriseApp

Remote info for Azure Enterprise App.

## Example Usage

```typescript
import { AzureEnterpriseApp } from "opal-mcp/models/components";

let value: AzureEnterpriseApp = {
  resourceId: "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     | Example                                                                         |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `resourceId`                                                                    | *string*                                                                        | :heavy_check_mark:                                                              | The remote application identifier (service principal or application object ID). | aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee                                            |