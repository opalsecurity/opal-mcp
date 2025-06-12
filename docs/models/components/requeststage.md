# RequestStage

A stage in the request review process

## Example Usage

```typescript
import { RequestStage } from "opal-mcp/models/components";

let value: RequestStage = {
  stage: 684388,
  operator: "OR",
  reviewers: [
    {
      id: "ad49e317-29f3-4a7c-bca4-979dabe188a1",
      status: "APPROVED",
    },
  ],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `stage`                                                                          | *number*                                                                         | :heavy_check_mark:                                                               | The stage number                                                                 |
| `operator`                                                                       | [components.ReviewStageOperator](../../models/components/reviewstageoperator.md) | :heavy_check_mark:                                                               | The operator to apply to reviewers in a stage                                    |
| `reviewers`                                                                      | [components.RequestReviewer](../../models/components/requestreviewer.md)[]       | :heavy_check_mark:                                                               | The reviewers for this stage                                                     |