# GetBundlesRequest

## Example Usage

```typescript
import { GetBundlesRequest } from "opal-mcp/models/operations";

let value: GetBundlesRequest = {
  pageSize: 200,
  cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
  contains: "Engineering",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `pageSize`                                                                                           | *number*                                                                                             | :heavy_minus_sign:                                                                                   | The maximum number of bundles to return from the beginning of the list. Default is 200, max is 1000. | 200                                                                                                  |
| `cursor`                                                                                             | *string*                                                                                             | :heavy_minus_sign:                                                                                   | A cursor indicating where to start fetching items after a specific point.                            | cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw                                             |
| `contains`                                                                                           | *string*                                                                                             | :heavy_minus_sign:                                                                                   | A filter for the bundle name.                                                                        | Engineering                                                                                          |