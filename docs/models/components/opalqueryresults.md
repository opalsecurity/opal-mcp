# OpalQueryResults

Paginated results of an OpalQuery. The `type` field discriminates which result schema applies and mirrors the `type` field on the request.


## Supported Types

### `components.OpalNodeQueryResults`

```typescript
const value: components.OpalNodeQueryResults = {
  type: "NODE",
  edges: [],
  pageInfo: {
    hasNextPage: true,
    endCursor: "<value>",
    hasPreviousPage: true,
    startCursor: "<value>",
  },
};
```

### `components.OpalAccessQueryResults`

```typescript
const value: components.OpalAccessQueryResults = {
  type: "ACCESS",
  edges: [
    {
      node: {
        principalId: "1ca2e54a-631d-4377-bbc5-05297e8302b7",
        entitlementId: "097e0c8e-6465-40e5-8f2f-298f1daf0f88",
        isDirect: true,
        paths: [],
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

