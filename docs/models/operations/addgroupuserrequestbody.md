# AddGroupUserRequestBody

## Example Usage

```typescript
import { AddGroupUserRequestBody } from "opal-mcp/models/operations";

let value: AddGroupUserRequestBody = {
  durationMinutes: 60,
  accessLevelRemoteId: "arn:aws:iam::590304332660:role/AdministratorAccess",
};
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           | Example                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `durationMinutes`                                                                                                                     | *number*                                                                                                                              | :heavy_check_mark:                                                                                                                    | The duration for which the group can be accessed (in minutes). Use 0 to set to indefinite.                                            | 60                                                                                                                                    |
| `accessLevelRemoteId`                                                                                                                 | *string*                                                                                                                              | :heavy_minus_sign:                                                                                                                    | The remote ID of the access level to grant to this user. If omitted, the default access level remote ID value (empty string) is used. | arn:aws:iam::590304332660:role/AdministratorAccess                                                                                    |