# DatabricksAccountServicePrincipal

Remote info for Databricks account service principal.

## Example Usage

```typescript
import { DatabricksAccountServicePrincipal } from "opal-mcp/models/components";

let value: DatabricksAccountServicePrincipal = {
  applicationId: "00000000-0000-0000-0000-000000000000",
  resourceId: "00000000-0000-0000-0000-000000000000",
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  | Example                                      |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `applicationId`                              | *string*                                     | :heavy_check_mark:                           | The application ID of the service principal. | 00000000-0000-0000-0000-000000000000         |
| `resourceId`                                 | *string*                                     | :heavy_check_mark:                           | The resource ID of the service principal.    | 00000000-0000-0000-0000-000000000000         |