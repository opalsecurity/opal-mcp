# RequestReviewer

A reviewer in a request stage

## Example Usage

```typescript
import { RequestReviewer } from "opal-mcp/models/components";

let value: RequestReviewer = {
  id: "3c4ee6ee-b77b-4ca9-97b7-4a5eb181dc00",
  status: "PENDING",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | The unique identifier of the reviewer                                                |
| `status`                                                                             | [components.RequestReviewerStatus](../../models/components/requestreviewerstatus.md) | :heavy_check_mark:                                                                   | The status of this reviewer's review                                                 |