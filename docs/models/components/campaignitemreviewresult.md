# CampaignItemReviewResult

A campaign item review after a successful submit. Flat fields only —
does not expand principal/entity relationships.


## Example Usage

```typescript
import { CampaignItemReviewResult } from "opal-mcp/models/components";

let value: CampaignItemReviewResult = {
  campaignItemReviewId: "4b8f2c1a-9d3e-4f6a-8b1c-2e5d7a9f0c3b",
  decision: "APPROVED",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                | Example                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `campaignItemReviewId`                                                                                     | *string*                                                                                                   | :heavy_check_mark:                                                                                         | The ID of the campaign item review.                                                                        | 4b8f2c1a-9d3e-4f6a-8b1c-2e5d7a9f0c3b                                                                       |
| `decision`                                                                                                 | [components.CampaignItemReviewResultDecision](../../models/components/campaignitemreviewresultdecision.md) | :heavy_minus_sign:                                                                                         | N/A                                                                                                        | APPROVED                                                                                                   |
| `note`                                                                                                     | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | Note recorded with the decision, if any.                                                                   |                                                                                                            |
| `decidedAt`                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)              | :heavy_minus_sign:                                                                                         | When the decision was submitted.                                                                           |                                                                                                            |
| `updatedAccessLevelRemoteId`                                                                               | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | When `decision` is `CHANGE_ROLE`, the remote ID of the access level<br/>the reviewer selected.<br/>        |                                                                                                            |
| `reassignedToReviewerIds`                                                                                  | *string*[]                                                                                                 | :heavy_minus_sign:                                                                                         | When `decision` is `REASSIGNED`, the user IDs the review was<br/>reassigned to.<br/>                       |                                                                                                            |