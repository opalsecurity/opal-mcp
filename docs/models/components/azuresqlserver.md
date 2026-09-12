# AzureSqlServer

Remote info for Azure SQL server.

## Example Usage

```typescript
import { AzureSqlServer } from "opal-mcp/models/components";

let value: AzureSqlServer = {
  resourceId:
    "/subscriptions/0000/resourceGroups/rg/providers/Microsoft.Sql/servers/sqldev01",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `resourceId`                                                                   | *string*                                                                       | :heavy_check_mark:                                                             | The ARM resource ID of the SQL server.                                         | /subscriptions/0000/resourceGroups/rg/providers/Microsoft.Sql/servers/sqldev01 |