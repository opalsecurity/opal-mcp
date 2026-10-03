# ReviewCampaignItemsResponse

Result of submitting campaign item review decisions.

## Example Usage

```typescript
import { ReviewCampaignItemsResponse } from "opal-mcp/models/components";

let value: ReviewCampaignItemsResponse = {
  reviews: [
    {
      campaignItemReviewId: "4b8f2c1a-9d3e-4f6a-8b1c-2e5d7a9f0c3b",
      decision: "APPROVED",
    },
  ],
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `reviews`                                                                                    | [components.CampaignItemReviewResult](../../models/components/campaignitemreviewresult.md)[] | :heavy_check_mark:                                                                           | Updated reviews in the same order as the request decisions.                                  |