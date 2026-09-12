# RunOpalQueryRequest

Request body for an ad-hoc OpalQuery. Set `type` to `NODE` to query entities, or `ACCESS_PATH` to query access edges. The fields available in `query` differ by type — refer to each tab for the full schema.



## Supported Types

### `components.OpalNodeQuery`

```typescript
const value: components.OpalNodeQuery = {
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

### `components.OpalAccessPathQuery`

```typescript
const value: components.OpalAccessPathQuery = {
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

