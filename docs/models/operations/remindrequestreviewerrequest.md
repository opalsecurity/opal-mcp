# RemindRequestReviewerRequest

## Example Usage

```typescript
import { RemindRequestReviewerRequest } from "opal-mcp/models/operations";

let value: RemindRequestReviewerRequest = {
  id: "c5989c96-c3d6-42d0-aaf1-4e02e2c63aa5",
  reviewerId: "22785b68-ca02-458e-b2ab-50cf85636521",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `id`                                                     | *string*                                                 | :heavy_check_mark:                                       | The ID of the request whose reviewer should be reminded. |
| `reviewerId`                                             | *string*                                                 | :heavy_check_mark:                                       | The ID of the pending reviewer to remind.                |