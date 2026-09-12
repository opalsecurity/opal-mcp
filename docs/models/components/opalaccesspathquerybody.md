# OpalAccessPathQueryBody

Edge-query filters for an ACCESS_PATH OpalQuery. At least one of principalFilter or entitlementFilter is required.

## Example Usage

```typescript
import { OpalAccessPathQueryBody } from "opal-mcp/models/components";

let value: OpalAccessPathQueryBody = {
  principalFilter: {
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
    allOf: [
      {
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
        anyOf: [
          {
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
        ],
      },
    ],
  },
  entitlementFilter: {
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
  principalAccessFilters: {
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
  },
  entitlementAccessFilters: {
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
  },
  edgeFilter: {
    directOnly: true,
    accessDurationType: "EXPIRING_ONLY",
  },
};
```

## Fields

| Field                                                                                                                                                                                          | Type                                                                                                                                                                                           | Required                                                                                                                                                                                       | Description                                                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `principalFilter`                                                                                                                                                                              | [components.AccessEntityFilters](../../models/components/accessentityfilters.md)                                                                                                               | :heavy_minus_sign:                                                                                                                                                                             | Filters for matching entities by type, name, tag, IDs, connections, or access levels. Supports recursive logical composition via allOf/anyOf.                                                  |
| `entitlementFilter`                                                                                                                                                                            | [components.AccessEntityFilters](../../models/components/accessentityfilters.md)                                                                                                               | :heavy_minus_sign:                                                                                                                                                                             | Filters for matching entities by type, name, tag, IDs, connections, or access levels. Supports recursive logical composition via allOf/anyOf.                                                  |
| `principalAccessFilters`                                                                                                                                                                       | [components.AccessRelationshipFilters](../../models/components/accessrelationshipfilters.md)                                                                                                   | :heavy_minus_sign:                                                                                                                                                                             | Filters the returned nodes by the access edges connected to them. When `isAccessibleBy` and `hasAccessTo` are provided, the returned nodes must satisfy both edge constraints simultaneously.<br/> |
| `entitlementAccessFilters`                                                                                                                                                                     | [components.AccessRelationshipFilters](../../models/components/accessrelationshipfilters.md)                                                                                                   | :heavy_minus_sign:                                                                                                                                                                             | Filters the returned nodes by the access edges connected to them. When `isAccessibleBy` and `hasAccessTo` are provided, the returned nodes must satisfy both edge constraints simultaneously.<br/> |
| `accessLevelRemoteIds`                                                                                                                                                                         | *string*[]                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                             | Filter by access-level remote IDs on the terminal edge.                                                                                                                                        |
| `accessLevelNames`                                                                                                                                                                             | *string*[]                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                             | Filter by access-level display names on the terminal edge.                                                                                                                                     |
| `edgeFilter`                                                                                                                                                                                   | [components.OpalAccessPathEdgeFilter](../../models/components/opalaccesspathedgefilter.md)                                                                                                     | :heavy_minus_sign:                                                                                                                                                                             | Constraints on the access path edges themselves.                                                                                                                                               |