# AddResourceNhiRequestBody

## Example Usage

```typescript
import { AddResourceNhiRequestBody } from "opal-mcp/models/operations";

let value: AddResourceNhiRequestBody = {
  durationMinutes: 60,
  accessLevelRemoteId: "roles/cloudsql.instanceUser",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              | Example                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `durationMinutes`                                                                                                        | *number*                                                                                                                 | :heavy_check_mark:                                                                                                       | The duration for which the resource can be accessed (in minutes). Use 0 to set to indefinite.                            | 60                                                                                                                       |
| `accessLevelRemoteId`                                                                                                    | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | The remote ID of the access level to grant. If omitted, the default access level remote ID value (empty string) is used. | roles/cloudsql.instanceUser                                                                                              |