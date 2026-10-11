# CampaignItemUnassignedPresetMessage

Preset assignment feedback when no review row was created.

## Example Usage

```typescript
import { CampaignItemUnassignedPresetMessage } from "opal-mcp/models/components";

let value: CampaignItemUnassignedPresetMessage = {
  campaignItemId: "f454d283-ca87-4a8a-bdbb-df212eca5353",
  assignmentSource: "MANUAL",
  message: "<value>",
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                | Example                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `campaignItemId`                                                                                                           | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | The ID of the campaign item.                                                                                               | f454d283-ca87-4a8a-bdbb-df212eca5353                                                                                       |
| `assignmentSource`                                                                                                         | [components.CampaignItemReviewerAssignmentSourceEnum](../../models/components/campaignitemreviewerassignmentsourceenum.md) | :heavy_check_mark:                                                                                                         | How a reviewer was assigned to a campaign item.                                                                            | MANUAL                                                                                                                     |
| `message`                                                                                                                  | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | Human-readable explanation of why no reviewer was assigned.                                                                |                                                                                                                            |