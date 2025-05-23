# UpdateGroupUserRequestBody

## Example Usage

```typescript
import { UpdateGroupUserRequestBody } from "opal-mcp/models/operations";

let value: UpdateGroupUserRequestBody = {
  durationMinutes: 60,
  accessLevelRemoteId: "arn:aws:iam::590304332660:role/AdministratorAccess",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `durationMinutes`                                                                            | *number*                                                                                     | :heavy_check_mark:                                                                           | The updated duration for which the group can be accessed (in minutes). Use 0 for indefinite. | 120                                                                                          |
| `accessLevelRemoteId`                                                                        | *string*                                                                                     | :heavy_minus_sign:                                                                           | The updated remote ID of the access level granted to this user.                              | arn:aws:iam::590304332660:role/ReadOnlyAccess                                                |