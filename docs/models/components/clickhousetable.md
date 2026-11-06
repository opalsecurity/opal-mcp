# ClickhouseTable

Remote info for ClickHouse table.

## Example Usage

```typescript
import { ClickhouseTable } from "opal-mcp/models/components";

let value: ClickhouseTable = {
  databaseName: "my_database",
  tableName: "my_table",
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               | Example                                                   |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `databaseName`                                            | *string*                                                  | :heavy_check_mark:                                        | The name of the ClickHouse database containing the table. | my_database                                               |
| `tableName`                                               | *string*                                                  | :heavy_check_mark:                                        | The name of the ClickHouse table.                         | my_table                                                  |