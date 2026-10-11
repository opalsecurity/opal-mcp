# AzureSqlDatabase

Remote info for Azure SQL database.

## Example Usage

```typescript
import { AzureSqlDatabase } from "opal-mcp/models/components";

let value: AzureSqlDatabase = {
  resourceId:
    "/subscriptions/0000/resourceGroups/rg/providers/Microsoft.Sql/servers/sqldev01/databases/db01",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `resourceId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | The ARM resource ID of the SQL database.                                                      | /subscriptions/0000/resourceGroups/rg/providers/Microsoft.Sql/servers/sqldev01/databases/db01 |