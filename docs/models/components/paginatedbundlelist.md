# PaginatedBundleList

## Example Usage

```typescript
import { PaginatedBundleList } from "opal-mcp/models/components";

let value: PaginatedBundleList = {
  previous: "cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ",
  next: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
  bundles: [
    {
      name: "Bundle 1",
      description: "Description of bundle 1",
      adminOwnerId: "4aed3e8a-727b-4d72-8010-3b8710c50bec",
      totalNumItems: 0,
      totalNumResources: 0,
      totalNumGroups: 0,
    },
    {
      name: "Bundle 2",
      description: "Description of bundle 2",
      adminOwnerId: "4aed3e8a-727b-4d72-8010-3b8710c50bec",
      totalNumItems: 0,
      totalNumResources: 0,
      totalNumGroups: 0,
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `previous`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | The cursor used to obtain the current result page.                             | cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ                       |
| `next`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | The cursor with which to continue pagination if additional result pages exist. | cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw                       |
| `totalCount`                                                                   | *number*                                                                       | :heavy_minus_sign:                                                             | The total number of items in the result set.                                   | 2                                                                              |
| `bundles`                                                                      | [components.Bundle](../../models/components/bundle.md)[]                       | :heavy_check_mark:                                                             | N/A                                                                            |                                                                                |