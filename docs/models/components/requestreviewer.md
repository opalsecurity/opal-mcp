# RequestReviewer

A reviewer in a request stage

## Example Usage

```typescript
import { RequestReviewer } from "opal-mcp/models/components";

let value: RequestReviewer = {
  id: "3c4ee6ee-b77b-4ca9-97b7-4a5eb181dc00",
  fullName: "Jake Barnes",
  status: "PENDING",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | The unique identifier of the reviewer                                                |                                                                                      |
| `fullName`                                                                           | *string*                                                                             | :heavy_minus_sign:                                                                   | The user's full name.                                                                | Jake Barnes                                                                          |
| `status`                                                                             | [components.RequestReviewerStatus](../../models/components/requestreviewerstatus.md) | :heavy_check_mark:                                                                   | The status of this reviewer's review                                                 |                                                                                      |