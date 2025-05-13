# UpdateIdpGroupMappingsRequest

## Example Usage

```typescript
import { UpdateIdpGroupMappingsRequest } from "opal-mcp/models/operations";

let value: UpdateIdpGroupMappingsRequest = {
  appResourceId: "4baf8423-db0a-4037-a4cf-f79c60cb67a5",
  requestBody: {
    mappings: [
      {},
    ],
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `appResourceId`                                                                                              | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The ID of the Okta app.                                                                                      | 4baf8423-db0a-4037-a4cf-f79c60cb67a5                                                                         |
| `requestBody`                                                                                                | [operations.UpdateIdpGroupMappingsRequestBody](../../models/operations/updateidpgroupmappingsrequestbody.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |                                                                                                              |