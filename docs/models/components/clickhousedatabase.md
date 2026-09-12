# ClickhouseDatabase

Remote info for ClickHouse database.

## Example Usage

```typescript
import { ClickhouseDatabase } from "opal-mcp/models/components";

let value: ClickhouseDatabase = {
  databaseName: "my_database",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `databaseName`                       | *string*                             | :heavy_check_mark:                   | The name of the ClickHouse database. | my_database                          |