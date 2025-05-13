# GetBundleResourcesRequest

## Example Usage

```typescript
import { GetBundleResourcesRequest } from "opal-mcp/models/operations";

let value: GetBundleResourcesRequest = {
  bundleId: "32acc112-21ff-4669-91c2-21e27683eaa1",
  pageSize: 200,
  cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `bundleId`                                                                                             | *string*                                                                                               | :heavy_check_mark:                                                                                     | The ID of the bundle.                                                                                  | 32acc112-21ff-4669-91c2-21e27683eaa1                                                                   |
| `pageSize`                                                                                             | *number*                                                                                               | :heavy_minus_sign:                                                                                     | The maximum number of resources to return from the beginning of the list. Default is 200, max is 1000. | 200                                                                                                    |
| `cursor`                                                                                               | *string*                                                                                               | :heavy_minus_sign:                                                                                     | A cursor indicating where to start fetching items after a specific point.                              | cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw                                               |