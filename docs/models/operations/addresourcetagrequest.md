# AddResourceTagRequest

## Example Usage

```typescript
import { AddResourceTagRequest } from "opal-mcp/models/operations";

let value: AddResourceTagRequest = {
  tagId: "1b978423-db0a-4037-a4cf-f79c60cb67b3",
  resourceId: "1b978423-db0a-4037-a4cf-f79c60cb67b3",
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 | Example                                     |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `tagId`                                     | *string*                                    | :heavy_check_mark:                          | The ID of the tag to apply.                 | 1b978423-db0a-4037-a4cf-f79c60cb67b3        |
| `resourceId`                                | *string*                                    | :heavy_check_mark:                          | The ID of the resource to apply the tag to. | 1b978423-db0a-4037-a4cf-f79c60cb67b3        |