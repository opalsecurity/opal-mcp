# PaginatedBundleGroupList

## Example Usage

```typescript
import { PaginatedBundleGroupList } from "opal-mcp/models/components";

let value: PaginatedBundleGroupList = {
  previous: "cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ",
  next: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
  totalCount: 2,
  bundleGroups: [
    {},
    {},
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `previous`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | The cursor used to obtain the current result page.                             | cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ                       |
| `next`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | The cursor with which to continue pagination if additional result pages exist. | cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw                       |
| `totalCount`                                                                   | *number*                                                                       | :heavy_minus_sign:                                                             | The total number of items in the result set.                                   | 2                                                                              |
| `bundleGroups`                                                                 | [components.BundleGroup](../../models/components/bundlegroup.md)[]             | :heavy_check_mark:                                                             | N/A                                                                            |                                                                                |