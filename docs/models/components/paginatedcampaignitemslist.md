# PaginatedCampaignItemsList

A paginated list of campaign items.

## Example Usage

```typescript
import { PaginatedCampaignItemsList } from "opal-mcp/models/components";

let value: PaginatedCampaignItemsList = {
  results: [],
  totalCount: 870576,
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | The cursor with which to continue pagination if additional result pages exist. |
| `previous`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | The cursor used to obtain the current result page.                             |
| `results`                                                                      | [components.CampaignItem](../../models/components/campaignitem.md)[]           | :heavy_check_mark:                                                             | N/A                                                                            |
| `totalCount`                                                                   | *number*                                                                       | :heavy_check_mark:                                                             | Total number of items matching the filter (across all pages).                  |