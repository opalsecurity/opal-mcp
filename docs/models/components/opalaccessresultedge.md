# OpalAccessResultEdge

A single ACCESS result edge containing the matched access grant and its pagination cursor.

## Example Usage

```typescript
import { OpalAccessResultEdge } from "opal-mcp/models/components";

let value: OpalAccessResultEdge = {
  node: {
    principalId: "1ca2e54a-631d-4377-bbc5-05297e8302b7",
    entitlementId: "097e0c8e-6465-40e5-8f2f-298f1daf0f88",
    isDirect: true,
    paths: [],
  },
  cursor: "<value>",
};
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `node`                                                                                                                                | [components.OpalAccessResultNode](../../models/components/opalaccessresultnode.md)                                                    | :heavy_check_mark:                                                                                                                    | A matched access grant from an ACCESS OpalQuery — one per (principal, entitlement, access level), with every access path as metadata. |
| `cursor`                                                                                                                              | *string*                                                                                                                              | :heavy_check_mark:                                                                                                                    | Opaque cursor for this grant, used for pagination.                                                                                    |