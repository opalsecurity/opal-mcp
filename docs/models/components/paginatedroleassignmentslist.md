# PaginatedRoleAssignmentsList

A paginated page of role assignments.

## Example Usage

```typescript
import { PaginatedRoleAssignmentsList } from "opal-mcp/models/components";

let value: PaginatedRoleAssignmentsList = {
  next: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
  previous: "cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ",
  results: [
    {
      id: "29827fb8-f2dd-4e80-9576-28e31e9934ac",
      entityId: "1b978423-db0a-4037-a4cf-f79c60cb67b3",
      entityType: "RESOURCE",
      principalId: "e8581682-04f7-473a-a419-472f0fb26d46",
      principalType: "USER",
      grantedAt: new Date("2024-07-10T19:21:00Z"),
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | The cursor with which to continue pagination if additional result pages exist. | cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw                       |
| `previous`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | The cursor used to obtain the current result page.                             | cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ                       |
| `results`                                                                      | [components.RoleAssignment](../../models/components/roleassignment.md)[]       | :heavy_check_mark:                                                             | N/A                                                                            |                                                                                |