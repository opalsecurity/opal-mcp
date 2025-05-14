# GetRequestsRelayRequest

## Example Usage

```typescript
import { GetRequestsRelayRequest } from "opal-mcp/models/operations";

let value: GetRequestsRelayRequest = {
  first: 10,
  after:
    "Y3Vyc29yOnYyOpK5MjAyMS0wMS0wN1QwNzo0MToyNy4xMTlaFjYwZmM2YmJlZjk4YzE1N2ZhNjFhYjk4Nw==",
  last: 10,
  before:
    "Y3Vyc29yOnYyOpK5MjAyMS0wMS0wN1QwNzo0MToyNy4xMTlaFjYwZmM2YmJlZjk4YzE1N2ZhNjFhYjk4Nw==",
  status: "PENDING",
  to: "37cb7e41-12ba-46da-92ff-030abe0450b1",
  from: "37cb7e41-12ba-46da-92ff-030abe0450b1",
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     | Example                                                                                         |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `first`                                                                                         | *number*                                                                                        | :heavy_minus_sign:                                                                              | Number of results to return after the cursor. Use either first/after or last/before, not both.  | 10                                                                                              |
| `after`                                                                                         | *string*                                                                                        | :heavy_minus_sign:                                                                              | Cursor to fetch results after. Used with 'first' for forward pagination.                        | Y3Vyc29yOnYyOpK5MjAyMS0wMS0wN1QwNzo0MToyNy4xMTlaFjYwZmM2YmJlZjk4YzE1N2ZhNjFhYjk4Nw==            |
| `last`                                                                                          | *number*                                                                                        | :heavy_minus_sign:                                                                              | Number of results to return before the cursor. Use either first/after or last/before, not both. | 10                                                                                              |
| `before`                                                                                        | *string*                                                                                        | :heavy_minus_sign:                                                                              | Cursor to fetch results before. Used with 'last' for backward pagination.                       | Y3Vyc29yOnYyOpK5MjAyMS0wMS0wN1QwNzo0MToyNy4xMTlaFjYwZmM2YmJlZjk4YzE1N2ZhNjFhYjk4Nw==            |
| `status`                                                                                        | [components.RequestStatusEnum](../../models/components/requeststatusenum.md)                    | :heavy_minus_sign:                                                                              | Filter requests by their status.                                                                | PENDING                                                                                         |
| `to`                                                                                            | *string*                                                                                        | :heavy_minus_sign:                                                                              | Filter requests assigned to a specific user ID.                                                 | 37cb7e41-12ba-46da-92ff-030abe0450b1                                                            |
| `from`                                                                                          | *string*                                                                                        | :heavy_minus_sign:                                                                              | Filter requests made by a specific user ID.                                                     | 37cb7e41-12ba-46da-92ff-030abe0450b1                                                            |