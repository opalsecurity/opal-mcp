# GetRequestsRequest

## Example Usage

```typescript
import { GetRequestsRequest } from "opal-mcp/models/operations";

let value: GetRequestsRequest = {
  cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
  pageSize: 200,
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `startDateFilter`                                           | *string*                                                    | :heavy_minus_sign:                                          | A start date filter for the events.                         |                                                             |
| `endDateFilter`                                             | *string*                                                    | :heavy_minus_sign:                                          | An end date filter for the events.                          |                                                             |
| `cursor`                                                    | *string*                                                    | :heavy_minus_sign:                                          | The pagination cursor value.                                | cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw    |
| `pageSize`                                                  | *number*                                                    | :heavy_minus_sign:                                          | Number of results to return per page. Default is 200.       | 200                                                         |
| `showPendingOnly`                                           | *boolean*                                                   | :heavy_minus_sign:                                          | Boolean toggle for if it should only show pending requests. |                                                             |