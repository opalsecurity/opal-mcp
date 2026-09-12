# OpalAccessPathQuery

Use an Access Path query to retrieve the access edges between principals (users or groups) and their entitlements (resources or groups). You can filter by principal type, entitlement type, access level, and edge characteristics such as depth or expiration. Results are paginated and returned as a list of access path edges.


## Example Usage

```typescript
import { OpalAccessPathQuery } from "opal-mcp/models/components";

let value: OpalAccessPathQuery = {
  type: "ACCESS_PATH",
  query: {
    principalFilter: {
      entityTypes: [
        "USER",
      ],
    },
    entitlementFilter: {
      entityItemTypes: [
        "AWS_IAM_ROLE",
      ],
    },
    edgeFilter: {
      directOnly: true,
    },
  },
  first: 50,
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                             | *"ACCESS_PATH"*                                                                                                    | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |                                                                                                                    |
| `query`                                                                                                            | [components.OpalAccessPathQueryBody](../../models/components/opalaccesspathquerybody.md)                           | :heavy_minus_sign:                                                                                                 | Edge-query filters for an ACCESS_PATH OpalQuery. At least one of principalFilter or entitlementFilter is required. |                                                                                                                    |
| `first`                                                                                                            | *number*                                                                                                           | :heavy_minus_sign:                                                                                                 | Maximum number of results to return. Defaults to 200.                                                              | 200                                                                                                                |
| `after`                                                                                                            | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | Opaque cursor from a previous ACCESS_PATH response to fetch the next page of results.                              |                                                                                                                    |
| `includeCount`                                                                                                     | *boolean*                                                                                                          | :heavy_minus_sign:                                                                                                 | When true, populate totalCount in the response. Defaults to false.                                                 | false                                                                                                              |