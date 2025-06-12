# SetGroupReviewerStagesRequest

## Example Usage

```typescript
import { SetGroupReviewerStagesRequest } from "opal-mcp/models/operations";

let value: SetGroupReviewerStagesRequest = {
  groupId: "4baf8423-db0a-4037-a4cf-f79c60cb67a5",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `groupId`                                                                    | *string*                                                                     | :heavy_check_mark:                                                           | The ID of the group.                                                         | 4baf8423-db0a-4037-a4cf-f79c60cb67a5                                         |
| `reviewerStageList`                                                          | [components.ReviewerStageList](../../models/components/reviewerstagelist.md) | :heavy_check_mark:                                                           | N/A                                                                          |                                                                              |