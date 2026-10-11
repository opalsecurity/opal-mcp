# AzureSqlManagedInstance

Remote info for Azure SQL managed instance.

## Example Usage

```typescript
import { AzureSqlManagedInstance } from "opal-mcp/models/components";

let value: AzureSqlManagedInstance = {
  resourceId:
    "/subscriptions/0000/resourceGroups/rg/providers/Microsoft.Sql/managedInstances/mi01",
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         | Example                                                                             |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `resourceId`                                                                        | *string*                                                                            | :heavy_check_mark:                                                                  | The ARM resource ID of the SQL managed instance.                                    | /subscriptions/0000/resourceGroups/rg/providers/Microsoft.Sql/managedInstances/mi01 |