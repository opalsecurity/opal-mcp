# RunOpalQueryRequest

Request body for an ad-hoc OpalQuery. Set `type` to `NODE` to query entities, or `ACCESS` to query access grants. The fields available in `query` differ by type — refer to each tab for the full schema.



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

### `components.OpalAccessQuery`

```typescript
const value: components.OpalAccessQuery = {
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

