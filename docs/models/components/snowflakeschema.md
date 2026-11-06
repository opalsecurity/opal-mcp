# SnowflakeSchema

Remote info for Snowflake schema.

## Example Usage

```typescript
import { SnowflakeSchema } from "opal-mcp/models/components";

let value: SnowflakeSchema = {
  databaseName: "mydatabase",
  schemaName: "mycatalogschema",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                | Example                                    |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `databaseName`                             | *string*                                   | :heavy_check_mark:                         | The name of the database the schema is in. | mydatabase                                 |
| `schemaName`                               | *string*                                   | :heavy_check_mark:                         | The name of the schema.                    | mycatalogschema                            |