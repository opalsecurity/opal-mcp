# GetUsersRequest

## Example Usage

```typescript
import { GetUsersRequest } from "opal-mcp/models/operations";

let value: GetUsersRequest = {
  cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
  pageSize: 200,
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `cursor`                                                 | *string*                                                 | :heavy_minus_sign:                                       | The pagination cursor value.                             | cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw |
| `pageSize`                                               | *number*                                                 | :heavy_minus_sign:                                       | Number of results to return per page. Default is 200.    | 200                                                      |