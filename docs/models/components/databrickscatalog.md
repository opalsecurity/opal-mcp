# DatabricksCatalog

Remote info for Databricks Unity Catalog catalog.

## Example Usage

```typescript
import { DatabricksCatalog } from "opal-mcp/models/components";

let value: DatabricksCatalog = {
  metastoreId: "12345678-1234-1234-1234-123456789012",
  fullName: "my_catalog",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   | Example                                                       |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `metastoreId`                                                 | *string*                                                      | :heavy_check_mark:                                            | The ID of the Unity Catalog metastore the catalog belongs to. | 12345678-1234-1234-1234-123456789012                          |
| `fullName`                                                    | *string*                                                      | :heavy_check_mark:                                            | The dot-qualified full name of the catalog (e.g. "catalog").  | my_catalog                                                    |