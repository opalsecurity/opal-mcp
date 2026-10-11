# ReviewCampaignItemsInfo

Input for submitting review decisions on one or more campaign item reviews.


## Example Usage

```typescript
import { ReviewCampaignItemsInfo } from "opal-mcp/models/components";

let value: ReviewCampaignItemsInfo = {
  decisions: [],
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `decisions`                                                                                              | [components.ReviewCampaignItemDecisionInfo](../../models/components/reviewcampaignitemdecisioninfo.md)[] | :heavy_check_mark:                                                                                       | The decisions to record. Each targets a single campaign item review.                                     |