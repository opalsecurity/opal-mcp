# GetGroupsRequest

## Example Usage

```typescript
import { GetGroupsRequest } from "opal-mcp/models/operations";

let value: GetGroupsRequest = {
  cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
  pageSize: 200,
  groupTypeFilter: "OPAL_GROUP",
  groupIds: [
    "4baf8423-db0a-4037-a4cf-f79c60cb67a5",
    "1b978423-db0a-4037-a4cf-f79c60cb67b3",
  ],
  groupName: "example-name",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `cursor`                                                                           | *string*                                                                           | :heavy_minus_sign:                                                                 | The pagination cursor value.                                                       | cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw                           |
| `pageSize`                                                                         | *number*                                                                           | :heavy_minus_sign:                                                                 | Number of results to return per page. Default is 200.                              | 200                                                                                |
| `groupTypeFilter`                                                                  | [components.GroupTypeEnum](../../models/components/grouptypeenum.md)               | :heavy_minus_sign:                                                                 | The group type to filter by.                                                       | OPAL_GROUP                                                                         |
| `groupIds`                                                                         | *string*[]                                                                         | :heavy_minus_sign:                                                                 | The group ids to filter by.                                                        | [<br/>"4baf8423-db0a-4037-a4cf-f79c60cb67a5",<br/>"1b978423-db0a-4037-a4cf-f79c60cb67b3"<br/>] |
| `groupName`                                                                        | *string*                                                                           | :heavy_minus_sign:                                                                 | Group name.                                                                        | example-name                                                                       |