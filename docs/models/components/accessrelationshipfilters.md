# AccessRelationshipFilters

Filters the returned nodes by the access edges connected to them. When `isAccessibleBy` and `hasAccessTo` are provided, the returned nodes must satisfy both edge constraints simultaneously.


## Example Usage

```typescript
import { AccessRelationshipFilters } from "opal-mcp/models/components";

let value: AccessRelationshipFilters = {
  isAccessibleBy: {
    entityItemTypes: [
      "OPAL_ROLE",
    ],
    entityName: {
      stringMatchType: "REGEX",
      string: "engineering",
    },
    entityTag: {
      key: "team",
      value: "platform",
    },
    hrIdpStatus: {
      statuses: [
        "ACTIVE",
      ],
    },
  },
  hasAccessTo: {
    entityItemTypes: [
      "OPAL_ROLE",
    ],
    entityName: {
      stringMatchType: "REGEX",
      string: "engineering",
    },
    entityTag: {
      key: "team",
      value: "platform",
    },
    hrIdpStatus: {
      statuses: [
        "ACTIVE",
      ],
    },
  },
};
```

## Fields

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `isAccessibleBy`                                                                                                                              | [components.AccessEntityFilters](../../models/components/accessentityfilters.md)                                                              | :heavy_minus_sign:                                                                                                                            | Filters for matching entities by type, name, tag, IDs, connections, or access levels. Supports recursive logical composition via allOf/anyOf. |
| `hasAccessTo`                                                                                                                                 | [components.AccessEntityFilters](../../models/components/accessentityfilters.md)                                                              | :heavy_minus_sign:                                                                                                                            | Filters for matching entities by type, name, tag, IDs, connections, or access levels. Supports recursive logical composition via allOf/anyOf. |