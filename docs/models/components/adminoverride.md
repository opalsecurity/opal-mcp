# AdminOverride

Admin override, if any.

## Example Usage

```typescript
import { AdminOverride } from "opal-mcp/models/components";

let value: AdminOverride = {
  actorUserId: "b51f9e2a-1b23-4f40-8934-274b8a1509dc",
  decision: "APPROVED",
  decidedAt: new Date("2025-07-13T19:18:50.390Z"),
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `actorUserId`                                                                                          | *string*                                                                                               | :heavy_check_mark:                                                                                     | The admin who applied the override.                                                                    |                                                                                                        |
| `decision`                                                                                             | [components.CampaignItemReviewDecisionEnum](../../models/components/campaignitemreviewdecisionenum.md) | :heavy_check_mark:                                                                                     | Decision recorded on a campaign item review row.                                                       | APPROVED                                                                                               |
| `decidedAt`                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)          | :heavy_check_mark:                                                                                     | When the override was applied.                                                                         |                                                                                                        |