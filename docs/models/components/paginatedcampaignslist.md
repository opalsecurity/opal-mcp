# PaginatedCampaignsList

A list of campaigns.

## Example Usage

```typescript
import { PaginatedCampaignsList } from "opal-mcp/models/components";

let value: PaginatedCampaignsList = {
  next: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
  previous: "cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ",
  results: [
    {
      campaignId: "f454d283-ca87-4a8a-bdbb-df212eca5353",
      name: "Q3 Access Review",
      status: "DRAFT",
      isTemplate: false,
      createdAt: new Date("2026-07-01T00:00:00Z"),
      updatedAt: new Date("2026-07-01T00:00:00Z"),
      createdByUserId: "32acc112-21ff-4669-91c2-21e27683eaa1",
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | The cursor with which to continue pagination if additional result pages exist. | cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw                       |
| `previous`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | The cursor used to obtain the current result page.                             | cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ                       |
| `results`                                                                      | [components.Campaign](../../models/components/campaign.md)[]                   | :heavy_check_mark:                                                             | N/A                                                                            |                                                                                |