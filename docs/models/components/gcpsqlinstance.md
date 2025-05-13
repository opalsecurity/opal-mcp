# GcpSqlInstance

Remote info for GCP SQL instance.

## Example Usage

```typescript
import { GcpSqlInstance } from "opal-mcp/models/components";

let value: GcpSqlInstance = {
  instanceId: "example-sql-898931321",
  projectId: "example-project-898931321",
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               | Example                                   |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `instanceId`                              | *string*                                  | :heavy_check_mark:                        | The id of the SQL instance.               | example-sql-898931321                     |
| `projectId`                               | *string*                                  | :heavy_check_mark:                        | The id of the project the instance is in. | example-project-898931321                 |