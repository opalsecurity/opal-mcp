# OpalAccessQuery

Use an Access query to retrieve access grants between principals (users or groups) and their entitlements (resources or groups), with one result per (principal, entitlement, access level). Every access path reaching that grant is returned as metadata on the result. Uses the same filters as an Access Path query; results are paginated.


## Example Usage

```typescript
import { OpalAccessQuery } from "opal-mcp/models/components";

let value: OpalAccessQuery = {
  type: "ACCESS",
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
  },
  first: 50,
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   | Example                                                                                                       |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                        | *"ACCESS"*                                                                                                    | :heavy_check_mark:                                                                                            | N/A                                                                                                           |                                                                                                               |
| `query`                                                                                                       | [components.OpalAccessPathQueryBody](../../models/components/opalaccesspathquerybody.md)                      | :heavy_minus_sign:                                                                                            | Edge-query filters for an ACCESS OpalQuery. At least one of principalFilter or entitlementFilter is required. |                                                                                                               |
| `first`                                                                                                       | *number*                                                                                                      | :heavy_minus_sign:                                                                                            | Maximum number of results to return. Defaults to 200.                                                         | 200                                                                                                           |
| `after`                                                                                                       | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | Opaque cursor from a previous ACCESS response to fetch the next page of results.                              |                                                                                                               |