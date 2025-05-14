# RequestItemStages

The stages configuration for a request item

## Example Usage

```typescript
import { RequestItemStages } from "opal-mcp/models/components";

let value: RequestItemStages = {
  requestedItemName: "<value>",
  stages: [
    {
      stage: 724102,
      operator: "OR",
      reviewers: [
        {
          id: "02fd5ca3-cee8-467f-bba5-34352764c668",
          status: "PENDING",
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