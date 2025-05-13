# GcpComputeInstance

Remote info for GCP compute instance.

## Example Usage

```typescript
import { GcpComputeInstance } from "opal-mcp/models/components";

let value: GcpComputeInstance = {
  instanceId: "example-instance-898931321",
  projectId: "example-project-898931321",
  zone: "us-central1-a",
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               | Example                                   |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `instanceId`                              | *string*                                  | :heavy_check_mark:                        | The id of the instance.                   | example-instance-898931321                |
| `projectId`                               | *string*                                  | :heavy_check_mark:                        | The id of the project the instance is in. | example-project-898931321                 |
| `zone`                                    | *string*                                  | :heavy_check_mark:                        | The zone the instance is in.              | us-central1-a                             |