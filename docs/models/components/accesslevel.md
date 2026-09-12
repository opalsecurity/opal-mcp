# AccessLevel

Access level on the role assignment, if any.

## Example Usage

```typescript
import { AccessLevel } from "opal-mcp/models/components";

let value: AccessLevel = {
  accessLevelName: "AdminRole",
  accessLevelRemoteId: "arn:aws:iam::590304332660:role/AdministratorAccess",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          | Example                                              |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `accessLevelName`                                    | *string*                                             | :heavy_check_mark:                                   | The human-readable name of the access level.         | AdminRole                                            |
| `accessLevelRemoteId`                                | *string*                                             | :heavy_check_mark:                                   | The machine-readable identifier of the access level. | arn:aws:iam::590304332660:role/AdministratorAccess   |