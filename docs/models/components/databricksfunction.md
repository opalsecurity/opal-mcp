# DatabricksFunction

Remote info for Databricks Unity Catalog function.

## Example Usage

```typescript
import { DatabricksFunction } from "opal-mcp/models/components";

let value: DatabricksFunction = {
  metastoreId: "12345678-1234-1234-1234-123456789012",
  fullName: "my_catalog.my_schema.my_function",
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   | Example                                                                       |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `metastoreId`                                                                 | *string*                                                                      | :heavy_check_mark:                                                            | The ID of the Unity Catalog metastore the function belongs to.                | 12345678-1234-1234-1234-123456789012                                          |
| `fullName`                                                                    | *string*                                                                      | :heavy_check_mark:                                                            | The dot-qualified full name of the function (e.g. "catalog.schema.function"). | my_catalog.my_schema.my_function                                              |