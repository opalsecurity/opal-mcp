# DatabricksVolume

Remote info for Databricks Unity Catalog volume.

## Example Usage

```typescript
import { DatabricksVolume } from "opal-mcp/models/components";

let value: DatabricksVolume = {
  metastoreId: "12345678-1234-1234-1234-123456789012",
  fullName: "my_catalog.my_schema.my_volume",
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `metastoreId`                                                             | *string*                                                                  | :heavy_check_mark:                                                        | The ID of the Unity Catalog metastore the volume belongs to.              | 12345678-1234-1234-1234-123456789012                                      |
| `fullName`                                                                | *string*                                                                  | :heavy_check_mark:                                                        | The dot-qualified full name of the volume (e.g. "catalog.schema.volume"). | my_catalog.my_schema.my_volume                                            |