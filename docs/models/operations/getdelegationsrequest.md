# GetDelegationsRequest

## Example Usage

```typescript
import { GetDelegationsRequest } from "opal-mcp/models/operations";

let value: GetDelegationsRequest = {
  delegatorUserId: "29827fb8-f2dd-4e80-9576-28e31e9934ac",
  delegateUserId: "29827fb8-f2dd-4e80-9576-28e31e9934ac",
  cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
  pageSize: 200,
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `delegatorUserId`                                                                                | *string*                                                                                         | :heavy_minus_sign:                                                                               | The delegator user ID to filter delegations by the user delegating their access review requests. | 29827fb8-f2dd-4e80-9576-28e31e9934ac                                                             |
| `delegateUserId`                                                                                 | *string*                                                                                         | :heavy_minus_sign:                                                                               | The delegate user ID to filter delegations by the user being delegated to.                       | 29827fb8-f2dd-4e80-9576-28e31e9934ac                                                             |
| `cursor`                                                                                         | *string*                                                                                         | :heavy_minus_sign:                                                                               | A cursor to indicate where to start fetching results.                                            | cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw                                         |
| `pageSize`                                                                                       | *number*                                                                                         | :heavy_minus_sign:                                                                               | The maximum number of results to return per page. The default is 200.                            | 200                                                                                              |