# UpdateCampaignRequest

## Example Usage

```typescript
import { UpdateCampaignRequest } from "opal-mcp/models/operations";

let value: UpdateCampaignRequest = {
  campaignId: "f454d283-ca87-4a8a-bdbb-df212eca5353",
  updateCampaignInfo: {
    name: "Q3 Access Review (Updated)",
    configuration: {
      endDate: new Date("2026-09-30T00:00:00Z"),
      timezone: "America/Los_Angeles",
    },
  },
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          | Example                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `campaignId`                                                                                                                         | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | The ID of the campaign.                                                                                                              | f454d283-ca87-4a8a-bdbb-df212eca5353                                                                                                 |
| `updateCampaignInfo`                                                                                                                 | [components.UpdateCampaignInfo](../../models/components/updatecampaigninfo.md)                                                       | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  | {<br/>"name": "Q3 Access Review (Updated)",<br/>"configuration": {<br/>"end_date": "2026-09-30T00:00:00Z",<br/>"timezone": "America/Los_Angeles"<br/>}<br/>} |