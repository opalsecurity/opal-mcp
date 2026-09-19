# OpalNodeQueryBody

The filter body for a NODE-type OpalQuery.

## Example Usage

```typescript
import { OpalNodeQueryBody } from "opal-mcp/models/components";

let value: OpalNodeQueryBody = {
  nodeFilters: {
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
  accessFilters: {
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
};
```

## Fields

| Field                                                                                                                                                                                          | Type                                                                                                                                                                                           | Required                                                                                                                                                                                       | Description                                                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `nodeFilters`                                                                                                                                                                                  | [components.AccessEntityFilters](../../models/components/accessentityfilters.md)                                                                                                               | :heavy_minus_sign:                                                                                                                                                                             | Filters for matching entities by type, name, tag, IDs, connections, or access levels. Supports recursive logical composition via allOf/anyOf.                                                  |
| `accessFilters`                                                                                                                                                                                | [components.AccessRelationshipFilters](../../models/components/accessrelationshipfilters.md)                                                                                                   | :heavy_minus_sign:                                                                                                                                                                             | Filters the returned nodes by the access edges connected to them. When `isAccessibleBy` and `hasAccessTo` are provided, the returned nodes must satisfy both edge constraints simultaneously.<br/> |