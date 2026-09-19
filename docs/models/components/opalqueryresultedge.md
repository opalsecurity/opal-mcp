# OpalQueryResultEdge

A single result edge from an OpalQuery, containing the matched entity and its pagination cursor.

## Example Usage

```typescript
import { OpalQueryResultEdge } from "opal-mcp/models/components";

let value: OpalQueryResultEdge = {
  node: {
    id: "7742498a-2d93-4a26-8fe7-e03e23c9abb1",
    name: "<value>",
    entityType: "GROUP",
    entityItemType: "OPAL_ROLE",
  },
  cursor: "<value>",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `node`                                                                           | [components.OpalQueryResultNode](../../models/components/opalqueryresultnode.md) | :heavy_check_mark:                                                               | A matched entity from an OpalQuery result.                                       |
| `cursor`                                                                         | *string*                                                                         | :heavy_check_mark:                                                               | Opaque cursor for this entity, used for pagination.                              |