# OpalAccessQueryResults

Paginated results of an ACCESS-type OpalQuery — one edge per matched (principal, entitlement, access level) grant.

## Example Usage

```typescript
import { OpalAccessQueryResults } from "opal-mcp/models/components";

let value: OpalAccessQueryResults = {
  type: "ACCESS",
  edges: [
    {
      node: {
        principalId: "1ca2e54a-631d-4377-bbc5-05297e8302b7",
        entitlementId: "097e0c8e-6465-40e5-8f2f-298f1daf0f88",
        isDirect: true,
        paths: [],
      },
      cursor: "<value>",
    },
  ],
  pageInfo: {
    hasNextPage: true,
    endCursor: "<value>",
    hasPreviousPage: true,
    startCursor: "<value>",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `type`                                                                               | *"ACCESS"*                                                                           | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `edges`                                                                              | [components.OpalAccessResultEdge](../../models/components/opalaccessresultedge.md)[] | :heavy_check_mark:                                                                   | List of matched access grants.                                                       |
| `pageInfo`                                                                           | [components.PageInfo](../../models/components/pageinfo.md)                           | :heavy_check_mark:                                                                   | N/A                                                                                  |