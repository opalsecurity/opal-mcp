# ReviewCampaignItemDecisionInfo

A single reviewer decision to submit for a campaign item review.
Mirrors GraphQL `CampaignItemReviewDecisionInput`.


## Example Usage

```typescript
import { ReviewCampaignItemDecisionInfo } from "opal-mcp/models/components";

let value: ReviewCampaignItemDecisionInfo = {
  campaignItemReviewId: "4b8f2c1a-9d3e-4f6a-8b1c-2e5d7a9f0c3b",
  decision: "APPROVED",
  note: "Access is still required for on-call.",
  accessLevelRemoteId: "arn:aws:iam::123456789012:role/ReadOnly",
  assignmentSource: "MANUAL",
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               | Example                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `campaignItemReviewId`                                                                                                    | *string*                                                                                                                  | :heavy_check_mark:                                                                                                        | The ID of the campaign item review to update.                                                                             | 4b8f2c1a-9d3e-4f6a-8b1c-2e5d7a9f0c3b                                                                                      |
| `decision`                                                                                                                | [components.CampaignItemReviewDecisionEnum](../../models/components/campaignitemreviewdecisionenum.md)                    | :heavy_check_mark:                                                                                                        | Decision recorded on a campaign item review row.                                                                          | APPROVED                                                                                                                  |
| `note`                                                                                                                    | *string*                                                                                                                  | :heavy_minus_sign:                                                                                                        | Optional note from the reviewer for this decision.                                                                        | Access is still required for on-call.                                                                                     |
| `accessLevelRemoteId`                                                                                                     | *string*                                                                                                                  | :heavy_minus_sign:                                                                                                        | Required when `decision` is `CHANGE_ROLE`. The remote ID of the<br/>access level to change to. Ignored for other decisions.<br/> | arn:aws:iam::123456789012:role/ReadOnly                                                                                   |
| `newReviewerUserIds`                                                                                                      | *string*[]                                                                                                                | :heavy_minus_sign:                                                                                                        | When `decision` is `REASSIGNED` and `assignment_source` is `MANUAL`<br/>or omitted, the user IDs to reassign this review to.<br/> |                                                                                                                           |
| `assignmentSource`                                                                                                        | [components.AssignmentSource](../../models/components/assignmentsource.md)                                                | :heavy_minus_sign:                                                                                                        | N/A                                                                                                                       | MANUAL                                                                                                                    |