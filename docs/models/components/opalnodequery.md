# OpalNodeQuery

Use a Node query to retrieve entities — users, resources, or groups — that match a set of filters. You can filter by entity type, tags, and access relationships. Results are paginated and returned as a list of entity edges.


## Example Usage

```typescript
import { OpalNodeQuery } from "opal-mcp/models/components";

let value: OpalNodeQuery = {
  type: "NODE",
  query: {
    nodeFilters: {
      entityTypes: [
        "RESOURCE",
      ],
      entityTag: {
        key: "env",
        value: "prod",
      },
    },
    accessFilters: {
      isAccessibleBy: {
        entityTypes: [
          "USER",
        ],
        entityTag: {
          key: "contractor",
        },
      },
    },
  },
  first: 50,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `type`                                                                       | *"NODE"*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |                                                                              |
| `query`                                                                      | [components.OpalNodeQueryBody](../../models/components/opalnodequerybody.md) | :heavy_minus_sign:                                                           | The filter body for a NODE-type OpalQuery.                                   |                                                                              |
| `first`                                                                      | *number*                                                                     | :heavy_minus_sign:                                                           | Maximum number of results to return. Defaults to 200.                        | 200                                                                          |
| `after`                                                                      | *string*                                                                     | :heavy_minus_sign:                                                           | Cursor from a previous response to fetch the next page of results.           | 29827fb8-f2dd-4e80-9576-28e31e9934ac                                         |