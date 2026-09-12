# OpalAccessPathQueryResults

Paginated results of an ACCESS_PATH-type OpalQuery — one edge per matched principal-to-entitlement access path.

## Example Usage

```typescript
import { OpalAccessPathQueryResults } from "opal-mcp/models/components";

let value: OpalAccessPathQueryResults = {
  type: "ACCESS_PATH",
  edges: [
    {
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

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `type`                                                                                          | *"ACCESS_PATH"*                                                                                 | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `edges`                                                                                         | [components.OpalAccessPathResultEdge](../../models/components/opalaccesspathresultedge.md)[]    | :heavy_check_mark:                                                                              | List of matched access paths.                                                                   |
| `pageInfo`                                                                                      | [components.PageInfo](../../models/components/pageinfo.md)                                      | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `totalCount`                                                                                    | *number*                                                                                        | :heavy_minus_sign:                                                                              | Exact total number of matching paths when includeCount was true on the request; otherwise null. |