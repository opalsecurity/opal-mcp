# GetResourcesRequest

## Example Usage

```typescript
import { GetResourcesRequest } from "opal-mcp/models/operations";

let value: GetResourcesRequest = {
  cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
  pageSize: 200,
  resourceTypeFilter: "AWS_IAM_ROLE",
  resourceIds: [
    "4baf8423-db0a-4037-a4cf-f79c60cb67a5",
    "1b978423-db0a-4037-a4cf-f79c60cb67b3",
  ],
  resourceName: "example-name",
  parentResourceId: "[\"4baf8423-db0a-4037-a4cf-f79c60cb67a5\"]",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `cursor`                                                                           | *string*                                                                           | :heavy_minus_sign:                                                                 | The pagination cursor value.                                                       | cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw                           |
| `pageSize`                                                                         | *number*                                                                           | :heavy_minus_sign:                                                                 | Number of results to return per page. Default is 200.                              | 200                                                                                |
| `resourceTypeFilter`                                                               | [components.ResourceTypeEnum](../../models/components/resourcetypeenum.md)         | :heavy_minus_sign:                                                                 | The resource type to filter by.                                                    | AWS_IAM_ROLE                                                                       |
| `resourceIds`                                                                      | *string*[]                                                                         | :heavy_minus_sign:                                                                 | The resource ids to filter by.                                                     | [<br/>"4baf8423-db0a-4037-a4cf-f79c60cb67a5",<br/>"1b978423-db0a-4037-a4cf-f79c60cb67b3"<br/>] |
| `resourceName`                                                                     | *string*                                                                           | :heavy_minus_sign:                                                                 | Resource name.                                                                     | example-name                                                                       |
| `parentResourceId`                                                                 | *string*                                                                           | :heavy_minus_sign:                                                                 | The parent resource id to filter by.                                               | [<br/>"4baf8423-db0a-4037-a4cf-f79c60cb67a5"<br/>]                                 |