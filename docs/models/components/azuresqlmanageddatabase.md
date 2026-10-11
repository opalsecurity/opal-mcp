# AzureSqlManagedDatabase

Remote info for Azure SQL managed database.

## Example Usage

```typescript
import { AzureSqlManagedDatabase } from "opal-mcp/models/components";

let value: AzureSqlManagedDatabase = {
  resourceId:
    "/subscriptions/0000/resourceGroups/rg/providers/Microsoft.Sql/managedInstances/mi01/databases/midb01",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `resourceId`                                                                                         | *string*                                                                                             | :heavy_check_mark:                                                                                   | The ARM resource ID of the SQL managed database.                                                     | /subscriptions/0000/resourceGroups/rg/providers/Microsoft.Sql/managedInstances/mi01/databases/midb01 |