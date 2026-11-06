# UpdateCampaignItemReviewersRequest

## Example Usage

```typescript
import { UpdateCampaignItemReviewersRequest } from "opal-mcp/models/operations";

let value: UpdateCampaignItemReviewersRequest = {
  campaignId: "f454d283-ca87-4a8a-bdbb-df212eca5353",
  updateCampaignItemReviewersInfo: {
    toAssign: [
      {
        campaignItemId: "f454d283-ca87-4a8a-bdbb-df212eca5353",
        reviewerId: "32acc112-21ff-4669-91c2-21e27683eaa1",
        assignmentSource: "MANUAL",
      },
    ],
    toUnassign: [
      {
        campaignItemId: "f454d283-ca87-4a8a-bdbb-df212eca5353",
        reviewerId: "32acc112-21ff-4669-91c2-21e27683eaa1",
        assignmentSource: "MANUAL",
      },
    ],
    toRemoveSources: [
      {
        campaignItemId: "f454d283-ca87-4a8a-bdbb-df212eca5353",
        assignmentSource: "MANUAL",
      },
    ],
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `campaignId`                                                                                             | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The ID of the campaign.                                                                                  | f454d283-ca87-4a8a-bdbb-df212eca5353                                                                     |
| `updateCampaignItemReviewersInfo`                                                                        | [components.UpdateCampaignItemReviewersInfo](../../models/components/updatecampaignitemreviewersinfo.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |                                                                                                          |