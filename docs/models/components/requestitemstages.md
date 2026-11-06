# ~~RequestItemStages~~

The stages configuration for a request item

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

## Example Usage

```typescript
import { RequestItemStages } from "opal-mcp/models/components";

let value: RequestItemStages = {
  requestedItemName: "<value>",
  stages: [
    {
      stage: 506134,
      operator: "AND",
      reviewers: [
        {
          id: "020729d7-6ef5-4700-aa93-7567afc9c5b0",
          fullName: "Jake Barnes",
          status: "APPROVED",
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `requestedRoleName`                                                  | *string*                                                             | :heavy_minus_sign:                                                   | The name of the requested role                                       |
| `requestedItemName`                                                  | *string*                                                             | :heavy_check_mark:                                                   | The name of the requested item                                       |
| `stages`                                                             | [components.RequestStage](../../models/components/requeststage.md)[] | :heavy_check_mark:                                                   | The stages of review for this request                                |