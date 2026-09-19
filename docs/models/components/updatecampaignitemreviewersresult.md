# UpdateCampaignItemReviewersResult

Result of updating campaign item reviewers.

## Example Usage

```typescript
import { UpdateCampaignItemReviewersResult } from "opal-mcp/models/components";

let value: UpdateCampaignItemReviewersResult = {
  reviews: [],
  unassignedPresetMessages: [],
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `reviews`                                                                                                          | [components.CampaignItemReview](../../models/components/campaignitemreview.md)[]                                   | :heavy_check_mark:                                                                                                 | Full review set for every referenced item after the update.                                                        |
| `unassignedPresetMessages`                                                                                         | [components.CampaignItemUnassignedPresetMessage](../../models/components/campaignitemunassignedpresetmessage.md)[] | :heavy_check_mark:                                                                                                 | Preset assignment messages for items that did not produce a review row.                                            |