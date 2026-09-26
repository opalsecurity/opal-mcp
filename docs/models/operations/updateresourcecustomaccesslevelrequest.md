# UpdateResourceCustomAccessLevelRequest

## Example Usage

```typescript
import { UpdateResourceCustomAccessLevelRequest } from "opal-mcp/models/operations";

let value: UpdateResourceCustomAccessLevelRequest = {
  resourceId: "1b978423-db0a-4037-a4cf-f79c60cb67b3",
  accessLevelRemoteId: "admin",
  updateResourceCustomAccessLevelInfo: {},
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      | Example                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `resourceId`                                                                                                     | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The ID of the resource.                                                                                          | 1b978423-db0a-4037-a4cf-f79c60cb67b3                                                                             |
| `accessLevelRemoteId`                                                                                            | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The remote ID of the access level.                                                                               | admin                                                                                                            |
| `updateResourceCustomAccessLevelInfo`                                                                            | [components.UpdateResourceCustomAccessLevelInfo](../../models/components/updateresourcecustomaccesslevelinfo.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |                                                                                                                  |