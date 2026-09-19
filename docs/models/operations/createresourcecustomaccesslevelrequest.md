# CreateResourceCustomAccessLevelRequest

## Example Usage

```typescript
import { CreateResourceCustomAccessLevelRequest } from "opal-mcp/models/operations";

let value: CreateResourceCustomAccessLevelRequest = {
  resourceId: "1b978423-db0a-4037-a4cf-f79c60cb67b3",
  createResourceCustomAccessLevelInfo: {
    accessLevel: {
      accessLevelName: "AdminRole",
      accessLevelRemoteId: "arn:aws:iam::590304332660:role/AdministratorAccess",
    },
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      | Example                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `resourceId`                                                                                                     | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The ID of the resource.                                                                                          | 1b978423-db0a-4037-a4cf-f79c60cb67b3                                                                             |
| `createResourceCustomAccessLevelInfo`                                                                            | [components.CreateResourceCustomAccessLevelInfo](../../models/components/createresourcecustomaccesslevelinfo.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |                                                                                                                  |