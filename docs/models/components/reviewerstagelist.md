# ReviewerStageList

## Example Usage

```typescript
import { ReviewerStageList } from "opal-mcp/models/components";

let value: ReviewerStageList = {
  stages: [
    {
      requireManagerApproval: false,
      operator: "AND",
      ownerIds: [
        "7870617d-e72a-47f5-a84c-693817ab4567",
        "1520617d-e72a-47f5-a84c-693817ab48ad2",
      ],
    },
  ],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `stages`                                                               | [components.ReviewerStage](../../models/components/reviewerstage.md)[] | :heavy_check_mark:                                                     | A list of reviewer stages.                                             |