# AddGroupResourceRequestBody

## Example Usage

```typescript
import { AddGroupResourceRequestBody } from "opal-mcp/models/operations";

let value: AddGroupResourceRequestBody = {
  accessLevelRemoteId: "arn:aws:iam::590304332660:role/AdministratorAccess",
  durationMinutes: 60,
};
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           | Example                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `accessLevelRemoteId`                                                                                                                 | *string*                                                                                                                              | :heavy_minus_sign:                                                                                                                    | The remote ID of the access level to grant to this user. If omitted, the default access level remote ID value (empty string) is used. | arn:aws:iam::590304332660:role/AdministratorAccess                                                                                    |
| `durationMinutes`                                                                                                                     | *number*                                                                                                                              | :heavy_minus_sign:                                                                                                                    | The duration for which the resource can be accessed (in minutes). Use 0 to set to indefinite.                                         | 60                                                                                                                                    |