# RemoveUserTagRequest

## Example Usage

```typescript
import { RemoveUserTagRequest } from "opal-mcp/models/operations";

let value: RemoveUserTagRequest = {
  tagId: "1b978423-db0a-4037-a4cf-f79c60cb67b3",
  userId: "1b978423-db0a-4037-a4cf-f79c60cb67b3",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                | Example                                    |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `tagId`                                    | *string*                                   | :heavy_check_mark:                         | The ID of the tag to remove.               | 1b978423-db0a-4037-a4cf-f79c60cb67b3       |
| `userId`                                   | *string*                                   | :heavy_check_mark:                         | The ID of the user to remove the tag from. | 1b978423-db0a-4037-a4cf-f79c60cb67b3       |