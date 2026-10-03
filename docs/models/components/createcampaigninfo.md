# CreateCampaignInfo

# CreateCampaignInfo Object
### Description
The `CreateCampaignInfo` object is used to create a campaign.

### Usage Example
Use in the `POST Campaigns` endpoint.

## Example Usage

```typescript
import { CreateCampaignInfo } from "opal-mcp/models/components";

let value: CreateCampaignInfo = {
  name: "Q3 Access Review",
  configuration: {
    query: {
      principalFilter: {
        entityTypes: [
          "USER",
        ],
      },
    },
    endDate: new Date("2026-09-30T00:00:00Z"),
    timezone: "America/Los_Angeles",
  },
};
```

## Fields

| Field                                                                                                                                                                | Type                                                                                                                                                                 | Required                                                                                                                                                             | Description                                                                                                                                                          | Example                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                                                               | *string*                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                   | The name of the campaign.                                                                                                                                            | Q3 Access Review                                                                                                                                                     |
| `configuration`                                                                                                                                                      | [components.CreateCampaignConfigurationInfo](../../models/components/createcampaignconfigurationinfo.md)                                                             | :heavy_check_mark:                                                                                                                                                   | Configuration for the campaign. Required; must include a query. Other omitted fields use defaults.                                                                   | {<br/>"query": {<br/>"principalFilter": {<br/>"entityTypes": [<br/>"USER"<br/>]<br/>}<br/>},<br/>"end_date": "2026-09-30T00:00:00Z",<br/>"timezone": "America/Los_Angeles",<br/>"allow_self_review": false<br/>} |