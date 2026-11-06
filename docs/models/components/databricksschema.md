# DatabricksSchema

Remote info for Databricks Unity Catalog schema.

## Example Usage

```typescript
import { DatabricksSchema } from "opal-mcp/models/components";

let value: DatabricksSchema = {
  metastoreId: "12345678-1234-1234-1234-123456789012",
  fullName: "my_catalog.my_schema",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `metastoreId`                                                      | *string*                                                           | :heavy_check_mark:                                                 | The ID of the Unity Catalog metastore the schema belongs to.       | 12345678-1234-1234-1234-123456789012                               |
| `fullName`                                                         | *string*                                                           | :heavy_check_mark:                                                 | The dot-qualified full name of the schema (e.g. "catalog.schema"). | my_catalog.my_schema                                               |