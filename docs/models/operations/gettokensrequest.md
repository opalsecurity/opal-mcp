# GetTokensRequest

## Example Usage

```typescript
import { GetTokensRequest } from "opal-mcp/models/operations";

let value: GetTokensRequest = {
  cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
  pageSize: 200,
  userId: "29827fb8-f2dd-4e80-9576-28e31e9934ac",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `cursor`                                                 | *string*                                                 | :heavy_minus_sign:                                       | The pagination cursor value.                             | cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw |
| `pageSize`                                               | *number*                                                 | :heavy_minus_sign:                                       | Number of results to return per page. Default is 200.    | 200                                                      |
| `tokenIds`                                               | *string*[]                                               | :heavy_minus_sign:                                       | Filter by token IDs.                                     |                                                          |
| `userId`                                                 | *string*                                                 | :heavy_minus_sign:                                       | Filter by user ID.                                       | 29827fb8-f2dd-4e80-9576-28e31e9934ac                     |