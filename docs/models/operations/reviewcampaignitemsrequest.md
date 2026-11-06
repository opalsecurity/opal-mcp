# ReviewCampaignItemsRequest

## Example Usage

```typescript
import { ReviewCampaignItemsRequest } from "opal-mcp/models/operations";

let value: ReviewCampaignItemsRequest = {
  campaignId: "f454d283-ca87-4a8a-bdbb-df212eca5353",
  reviewCampaignItemsInfo: {
    decisions: [],
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `campaignId`                                                                             | *string*                                                                                 | :heavy_check_mark:                                                                       | The ID of the campaign.                                                                  | f454d283-ca87-4a8a-bdbb-df212eca5353                                                     |
| `reviewCampaignItemsInfo`                                                                | [components.ReviewCampaignItemsInfo](../../models/components/reviewcampaignitemsinfo.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |                                                                                          |