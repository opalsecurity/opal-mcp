# AddUserTagRequest

## Example Usage

```typescript
import { AddUserTagRequest } from "opal-mcp/models/operations";

let value: AddUserTagRequest = {
  tagId: "1b978423-db0a-4037-a4cf-f79c60cb67b3",
  userId: "1b978423-db0a-4037-a4cf-f79c60cb67b3",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `tagId`                                                                              | *string*                                                                             | :heavy_check_mark:                                                                   | The ID of the tag to apply.                                                          | 1b978423-db0a-4037-a4cf-f79c60cb67b3                                                 |
| `userId`                                                                             | *string*                                                                             | :heavy_check_mark:                                                                   | The ID of the user to apply the tag to.                                              | 1b978423-db0a-4037-a4cf-f79c60cb67b3                                                 |
| `requestBody`                                                                        | [operations.AddUserTagRequestBody](../../models/operations/addusertagrequestbody.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  |                                                                                      |