# PaginatedViewerCampaignItemsList

A paginated list of viewer campaign items.

## Example Usage

```typescript
import { PaginatedViewerCampaignItemsList } from "opal-mcp/models/components";

let value: PaginatedViewerCampaignItemsList = {
  results: [
    {
      campaignItemReviewId: "2df3e43a-2cac-4637-a6f8-d7a183c000ae",
      decision: "APPROVED",
      pendingDecision: "APPROVED",
      principalId: "911751d9-e567-4aea-abe5-4390bf6d20c3",
      principalType: "GROUP",
      entityId: "9dd3082f-bcfb-47ae-9b32-1a2600cf8cff",
      entityType: "GROUP",
      grantedAt: new Date("2026-07-27T19:21:35.843Z"),
      roleAssignmentId: "d1e155b5-4031-4327-8484-7057f3143666",
    },
  ],
  totalCount: 548319,
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `next`                                                                           | *string*                                                                         | :heavy_minus_sign:                                                               | The cursor with which to continue pagination if additional result<br/>pages exist.<br/> |
| `previous`                                                                       | *string*                                                                         | :heavy_minus_sign:                                                               | The cursor used to obtain the current result page.                               |
| `results`                                                                        | [components.ViewerCampaignItem](../../models/components/viewercampaignitem.md)[] | :heavy_check_mark:                                                               | N/A                                                                              |
| `totalCount`                                                                     | *number*                                                                         | :heavy_check_mark:                                                               | Total number of items matching the filter (across all pages).                    |