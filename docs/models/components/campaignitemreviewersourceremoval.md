# CampaignItemReviewerSourceRemoval

Remove all pending reviewer rows for a given assignment source on a
campaign item. Completed reviews are preserved.


## Example Usage

```typescript
import { CampaignItemReviewerSourceRemoval } from "opal-mcp/models/components";

let value: CampaignItemReviewerSourceRemoval = {
  campaignItemId: "f454d283-ca87-4a8a-bdbb-df212eca5353",
  assignmentSource: "MANUAL",
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                | Example                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `campaignItemId`                                                                                                           | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | The ID of the campaign item.                                                                                               | f454d283-ca87-4a8a-bdbb-df212eca5353                                                                                       |
| `assignmentSource`                                                                                                         | [components.CampaignItemReviewerAssignmentSourceEnum](../../models/components/campaignitemreviewerassignmentsourceenum.md) | :heavy_check_mark:                                                                                                         | How a reviewer was assigned to a campaign item.                                                                            | MANUAL                                                                                                                     |