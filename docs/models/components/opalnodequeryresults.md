# OpalNodeQueryResults

Paginated results of a NODE-type OpalQuery — one edge per matched entity (user, resource, or group).

## Example Usage

```typescript
import { OpalNodeQueryResults } from "opal-mcp/models/components";

let value: OpalNodeQueryResults = {
  type: "NODE",
  edges: [],
  pageInfo: {
    hasNextPage: true,
    endCursor: "<value>",
    hasPreviousPage: true,
    startCursor: "<value>",
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `type`                                                                             | *"NODE"*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `edges`                                                                            | [components.OpalQueryResultEdge](../../models/components/opalqueryresultedge.md)[] | :heavy_check_mark:                                                                 | List of matched entities.                                                          |
| `pageInfo`                                                                         | [components.PageInfo](../../models/components/pageinfo.md)                         | :heavy_check_mark:                                                                 | N/A                                                                                |