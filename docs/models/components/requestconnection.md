# RequestConnection

## Example Usage

```typescript
import { RequestConnection } from "opal-mcp/models/components";

let value: RequestConnection = {
  edges: [
    {
      node: {
        id: "7c86c85d-0651-43e2-a748-d69d658418e8",
        createdAt: new Date("2021-01-06T20:00:00Z"),
        updatedAt: new Date("2021-01-06T20:00:00Z"),
        requesterId: "c86c85d-0651-43e2-a748-d69d658418e8",
        targetUserId: "r86c85d-0651-43e2-a748-d69d658418e8",
        targetGroupId: "r86c85d-0651-43e2-a748-d69d658418e8",
        status: "CANCELED",
        reason: "I need this resource.",
        durationMinutes: 1440,
        reviewerStages: "<value>",
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
  totalCount: 505727,
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `edges`                                                            | [components.RequestEdge](../../models/components/requestedge.md)[] | :heavy_check_mark:                                                 | N/A                                                                |
| `pageInfo`                                                         | [components.PageInfo](../../models/components/pageinfo.md)         | :heavy_check_mark:                                                 | N/A                                                                |
| `totalCount`                                                       | *number*                                                           | :heavy_check_mark:                                                 | The total number of items available                                |