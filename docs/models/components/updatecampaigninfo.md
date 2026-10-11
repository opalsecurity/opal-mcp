# UpdateCampaignInfo

# UpdateCampaignInfo Object
### Description
The `UpdateCampaignInfo` object is used to partially update a campaign.
Omitted fields are left unchanged.

### Usage Example
Use in the `PUT Campaign` endpoint.

## Example Usage

```typescript
import { UpdateCampaignInfo } from "opal-mcp/models/components";

let value: UpdateCampaignInfo = {
  name: "Q3 Access Review (Updated)",
  configuration: {
    endDate: new Date("2026-09-30T00:00:00Z"),
    timezone: "America/Los_Angeles",
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                   | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | The name of the campaign.                                                                                | Q3 Access Review (Updated)                                                                               |
| `configuration`                                                                                          | [components.UpdateCampaignConfigurationInfo](../../models/components/updatecampaignconfigurationinfo.md) | :heavy_minus_sign:                                                                                       | Configuration fields to create or update.                                                                | {<br/>"end_date": "2026-09-30T00:00:00Z",<br/>"timezone": "America/Los_Angeles",<br/>"allow_self_review": false<br/>} |