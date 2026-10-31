# DenyRequestRequestBody

Denial parameters

## Example Usage

```typescript
import { DenyRequestRequestBody } from "opal-mcp/models/operations";

let value: DenyRequestRequestBody = {
  comment: "Denied due to insufficient justification",
  level: "REGULAR",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `comment`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | Comment for the denial                                                           | Denied due to insufficient justification                                         |
| `level`                                                                          | [components.RequestApprovalEnum](../../models/components/requestapprovalenum.md) | :heavy_minus_sign:                                                               | The decision level for the approval                                              | REGULAR                                                                          |