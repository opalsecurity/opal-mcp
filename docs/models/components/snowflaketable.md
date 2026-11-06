# SnowflakeTable

Remote info for Snowflake table.

## Example Usage

```typescript
import { SnowflakeTable } from "opal-mcp/models/components";

let value: SnowflakeTable = {
  databaseName: "mydatabase",
  schemaName: "mycatalogschema",
  tableName: "myitemstable",
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               | Example                                   |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `databaseName`                            | *string*                                  | :heavy_check_mark:                        | The name of the database the table is in. | mydatabase                                |
| `schemaName`                              | *string*                                  | :heavy_check_mark:                        | The name of the schema the table is in.   | mycatalogschema                           |
| `tableName`                               | *string*                                  | :heavy_check_mark:                        | The name of the table.                    | myitemstable                              |