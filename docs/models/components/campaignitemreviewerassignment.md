# CampaignItemReviewerAssignment

Pair of campaign item and reviewer to assign or unassign.

## Example Usage

```typescript
import { CampaignItemReviewerAssignment } from "opal-mcp/models/components";

let value: CampaignItemReviewerAssignment = {
  campaignItemId: "f454d283-ca87-4a8a-bdbb-df212eca5353",
  reviewerId: "32acc112-21ff-4669-91c2-21e27683eaa1",
  assignmentSource: "MANUAL",
};
```

## Fields

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   | Example                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `campaignItemId`                                                                                                                              | *string*                                                                                                                                      | :heavy_check_mark:                                                                                                                            | The ID of the campaign item.                                                                                                                  | f454d283-ca87-4a8a-bdbb-df212eca5353                                                                                                          |
| `reviewerId`                                                                                                                                  | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | The ID of the reviewer. Required when `assignment_source` is `MANUAL`<br/>(or omitted), and required for every unassign entry.<br/>           | 32acc112-21ff-4669-91c2-21e27683eaa1                                                                                                          |
| `assignmentSource`                                                                                                                            | [components.CampaignItemReviewerAssignmentSourceEnum](../../models/components/campaignitemreviewerassignmentsourceenum.md)                    | :heavy_minus_sign:                                                                                                                            | Defaults to `MANUAL`. When `PRINCIPAL_MANAGER` or `ASSET_ADMIN_OWNER`,<br/>the backend resolves reviewer ID(s) and `reviewer_id` may be omitted.<br/> | MANUAL                                                                                                                                        |