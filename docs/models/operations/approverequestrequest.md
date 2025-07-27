# ApproveRequestRequest

## Example Usage

```typescript
import { ApproveRequestRequest } from "opal-mcp/models/operations";

let value: ApproveRequestRequest = {
  id: "ae5ef234-75fd-4108-95f7-05f65b859c51",
  requestBody: {
    level: "REGULAR",
    comment: "Approved after security review",
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `id`                                                                                         | *string*                                                                                     | :heavy_check_mark:                                                                           | The ID of the request to approve                                                             |
| `requestBody`                                                                                | [operations.ApproveRequestRequestBody](../../models/operations/approverequestrequestbody.md) | :heavy_check_mark:                                                                           | Approval parameters                                                                          |