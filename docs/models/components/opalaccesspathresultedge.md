# OpalAccessPathResultEdge

A single ACCESS_PATH result edge containing the matched path and its pagination cursor.

## Example Usage

```typescript
import { OpalAccessPathResultEdge } from "opal-mcp/models/components";

let value: OpalAccessPathResultEdge = {
  node: {
    principalId: "30185e8b-4e98-462b-97c0-ae6875ddc941",
    entitlementId: "5d66799f-f32b-42af-a6f4-164bc0863a70",
    depth: 865536,
    path: [
      "4f62bfe0-74f6-4092-823c-5651405ba9bb",
      "ad59c5c1-b743-48a3-85dd-940643fe5a1d",
      "32e39d39-9553-40bb-bcc9-d1f70b5f4fc8",
    ],
  },
  cursor: "<value>",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `node`                                                                                     | [components.OpalAccessPathResultNode](../../models/components/opalaccesspathresultnode.md) | :heavy_check_mark:                                                                         | A matched access path from an ACCESS_PATH OpalQuery.                                       |
| `cursor`                                                                                   | *string*                                                                                   | :heavy_check_mark:                                                                         | Opaque cursor for this path, used for pagination.                                          |