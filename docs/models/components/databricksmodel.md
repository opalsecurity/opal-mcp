# DatabricksModel

Remote info for Databricks Unity Catalog registered model.

## Example Usage

```typescript
import { DatabricksModel } from "opal-mcp/models/components";

let value: DatabricksModel = {
  metastoreId: "12345678-1234-1234-1234-123456789012",
  fullName: "my_catalog.my_schema.my_model",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `metastoreId`                                                           | *string*                                                                | :heavy_check_mark:                                                      | The ID of the Unity Catalog metastore the model belongs to.             | 12345678-1234-1234-1234-123456789012                                    |
| `fullName`                                                              | *string*                                                                | :heavy_check_mark:                                                      | The dot-qualified full name of the model (e.g. "catalog.schema.model"). | my_catalog.my_schema.my_model                                           |