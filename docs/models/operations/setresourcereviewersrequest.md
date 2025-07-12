# SetResourceReviewersRequest

## Example Usage

```typescript
import { SetResourceReviewersRequest } from "opal-mcp/models/operations";

let value: SetResourceReviewersRequest = {
  resourceId: "4baf8423-db0a-4037-a4cf-f79c60cb67a5",
  reviewerIDList: {
    reviewerIds: [
      "7870617d-e72a-47f5-a84c-693817ab4567",
      "1520617d-e72a-47f5-a84c-693817ab48ad2",
    ],
  },
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             | Example                                                                                                 |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `resourceId`                                                                                            | *string*                                                                                                | :heavy_check_mark:                                                                                      | The ID of the resource.                                                                                 | 4baf8423-db0a-4037-a4cf-f79c60cb67a5                                                                    |
| `reviewerIDList`                                                                                        | [components.ReviewerIDList](../../models/components/revieweridlist.md)                                  | :heavy_check_mark:                                                                                      | N/A                                                                                                     | {<br/>"reviewer_ids": [<br/>"7870617d-e72a-47f5-a84c-693817ab4567",<br/>"1520617d-e72a-47f5-a84c-693817ab48ad2"<br/>]<br/>} |