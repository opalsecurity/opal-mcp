# ApproveRequestRequestBody

Approval parameters

## Example Usage

```typescript
import { ApproveRequestRequestBody } from "opal-mcp/models/operations";

let value: ApproveRequestRequestBody = {
  level: "REGULAR",
  comment: "Approved after security review",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          | Example                                              |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `level`                                              | [operations.Level](../../models/operations/level.md) | :heavy_check_mark:                                   | The decision level for the approval                  | REGULAR                                              |
| `comment`                                            | *string*                                             | :heavy_minus_sign:                                   | Optional comment for the approval                    | Approved after security review                       |