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

### `components.OpalAccessPathQueryResults`

```typescript
const value: components.OpalAccessPathQueryResults = {
  type: "ACCESS_PATH",
  edges: [
    {
      node: {
        principalId: "30185e8b-4e98-462b-97c0-ae6875ddc941",
        entitlementId: "5d66799f-f32b-42af-a6f4-164bc0863a70",
        depth: 865536,
        path: [
          "4f62bfe0-74f6-4092-823c-5651405ba9bb",
          "ad59c5c1-b743-48a3-85dd-940643fe5a1d",
          "32e39d39-9553-40bb-bcc9-d1f70b5f4fc8",
        ],
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

