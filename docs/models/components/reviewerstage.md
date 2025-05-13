# ReviewerStage

A reviewer stage.

## Example Usage

```typescript
import { ReviewerStage } from "opal-mcp/models/components";

let value: ReviewerStage = {
  requireManagerApproval: false,
  operator: "AND",
  ownerIds: [
    "7870617d-e72a-47f5-a84c-693817ab4567",
    "1520617d-e72a-47f5-a84c-693817ab48ad2",
  ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `requireManagerApproval`                                                                      | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether this reviewer stage should require manager approval.                                  | false                                                                                         |
| `requireAdminApproval`                                                                        | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | Whether this reviewer stage should require admin approval.                                    | false                                                                                         |
| `operator`                                                                                    | [components.Operator](../../models/components/operator.md)                                    | :heavy_check_mark:                                                                            | The operator of the reviewer stage. Admin and manager approval are also treated as reviewers. | AND                                                                                           |
| `ownerIds`                                                                                    | *string*[]                                                                                    | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |