# DeleteIdpGroupMappingsRequest

## Example Usage

```typescript
import { DeleteIdpGroupMappingsRequest } from "opal-mcp/models/operations";

let value: DeleteIdpGroupMappingsRequest = {
  appResourceId: "4baf8423-db0a-4037-a4cf-f79c60cb67a5",
  groupId: "4baf8423-db0a-4037-a4cf-f79c60cb67a5",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `appResourceId`                      | *string*                             | :heavy_check_mark:                   | The ID of the Okta app.              | 4baf8423-db0a-4037-a4cf-f79c60cb67a5 |
| `groupId`                            | *string*                             | :heavy_check_mark:                   | The ID of the group.                 | 4baf8423-db0a-4037-a4cf-f79c60cb67a5 |