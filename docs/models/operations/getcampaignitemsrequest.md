# GetCampaignItemsRequest

## Example Usage

```typescript
import { GetCampaignItemsRequest } from "opal-mcp/models/operations";

let value: GetCampaignItemsRequest = {
  campaignId: "f454d283-ca87-4a8a-bdbb-df212eca5353",
  cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
  pageSize: 200,
  statuses: [
    "PENDING",
  ],
  reviewerUserId: "32acc112-21ff-4669-91c2-21e27683eaa1",
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     | Example                                                                                                         |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `campaignId`                                                                                                    | *string*                                                                                                        | :heavy_check_mark:                                                                                              | The ID of the campaign.                                                                                         | f454d283-ca87-4a8a-bdbb-df212eca5353                                                                            |
| `cursor`                                                                                                        | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | The pagination cursor value.                                                                                    | cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw                                                        |
| `pageSize`                                                                                                      | *number*                                                                                                        | :heavy_minus_sign:                                                                                              | Number of results to return per page. Default is 200; maximum is<br/>500 (the campaign-items list cap).<br/>    | 200                                                                                                             |
| `statuses`                                                                                                      | [components.CampaignItemStatusEnum](../../models/components/campaignitemstatusenum.md)[]                        | :heavy_minus_sign:                                                                                              | Filter by derived item status. When multiple values are provided,<br/>items matching any status are returned (OR).<br/> |                                                                                                                 |
| `reviewerUserId`                                                                                                | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | Restrict to items assigned to this reviewer user ID.                                                            | 32acc112-21ff-4669-91c2-21e27683eaa1                                                                            |
| `unassigned`                                                                                                    | *boolean*                                                                                                       | :heavy_minus_sign:                                                                                              | When true, restrict to items with no reviewer assigned.                                                         |                                                                                                                 |
| `search`                                                                                                        | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | Case-insensitive search over principal name, asset name, and<br/>reviewer name.<br/>                            |                                                                                                                 |