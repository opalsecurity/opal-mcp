# DatabricksService

Remote info for Databricks AI Gateway service.

## Example Usage

```typescript
import { DatabricksService } from "opal-mcp/models/components";

let value: DatabricksService = {
  metastoreId: "12345678-1234-1234-1234-123456789012",
  fullName: "my_catalog.my_schema.my_service",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 | Example                                                                     |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `metastoreId`                                                               | *string*                                                                    | :heavy_check_mark:                                                          | The ID of the Unity Catalog metastore the service belongs to.               | 12345678-1234-1234-1234-123456789012                                        |
| `fullName`                                                                  | *string*                                                                    | :heavy_check_mark:                                                          | The dot-qualified full name of the service (e.g. "catalog.schema.service"). | my_catalog.my_schema.my_service                                             |