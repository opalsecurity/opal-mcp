# CreateRequestCommentRequest

## Example Usage

```typescript
import { CreateRequestCommentRequest } from "opal-mcp/models/operations";

let value: CreateRequestCommentRequest = {
  id: "9041c256-1591-47de-a70d-c7b1c2a85359",
  requestBody: {
    comment:
      "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                     | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The ID of the request to comment on                                                                      |
| `requestBody`                                                                                            | [operations.CreateRequestCommentRequestBody](../../models/operations/createrequestcommentrequestbody.md) | :heavy_check_mark:                                                                                       | Comment parameters                                                                                       |