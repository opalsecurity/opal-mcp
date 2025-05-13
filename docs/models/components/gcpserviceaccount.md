# GcpServiceAccount

Remote info for a GCP service account.

## Example Usage

```typescript
import { GcpServiceAccount } from "opal-mcp/models/components";

let value: GcpServiceAccount = {
  email: "production@project.iam.gserviceaccount.com",
  serviceAccountId: "103561576023829460000",
  projectId: "example-project-898931321",
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      | Example                                          |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `email`                                          | *string*                                         | :heavy_check_mark:                               | The email of the service account.                | production@project.iam.gserviceaccount.com       |
| `serviceAccountId`                               | *string*                                         | :heavy_check_mark:                               | The id of the service account.                   | 1.0356157602382946e+20                           |
| `projectId`                                      | *string*                                         | :heavy_check_mark:                               | The id of the project the service account is in. | example-project-898931321                        |