# UpdateCampaignItemReviewersInfo

Input for updating campaign item reviewers.

## Example Usage

```typescript
import { UpdateCampaignItemReviewersInfo } from "opal-mcp/models/components";

let value: UpdateCampaignItemReviewersInfo = {
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
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `toAssign`                                                                                                                       | [components.CampaignItemReviewerAssignment](../../models/components/campaignitemreviewerassignment.md)[]                         | :heavy_minus_sign:                                                                                                               | Pairs to assign. Existing pairs are ignored.                                                                                     |
| `toUnassign`                                                                                                                     | [components.CampaignItemReviewerAssignment](../../models/components/campaignitemreviewerassignment.md)[]                         | :heavy_minus_sign:                                                                                                               | Pairs to unassign. Only pending `MANUAL` pairs are removed; missing<br/>pairs are skipped. `reviewer_id` is required on each entry.<br/> |
| `toRemoveSources`                                                                                                                | [components.CampaignItemReviewerSourceRemoval](../../models/components/campaignitemreviewersourceremoval.md)[]                   | :heavy_minus_sign:                                                                                                               | Remove all pending rows for the given assignment sources.                                                                        |