# PaginatedDelegationsList

A list of delegations for your organization.

## Example Usage

```typescript
import { PaginatedDelegationsList } from "opal-mcp/models/components";

let value: PaginatedDelegationsList = {
  results: [
    {
      id: "4aed3e8a-727b-4d72-8010-3b8710c50bec",
      delegatorUserId: "123e4567-e89b-12d3-a456-426614174000",
      delegateUserId: "7c86c85d-0651-43e2-a748-d69d658418e8",
      startTime: new Date("2023-10-01T12:00:00Z"),
      endTime: new Date("2023-10-01T12:00:00Z"),
      reason: "I need to be out of the office",
      createdAt: new Date("2023-10-01T12:00:00Z"),
      updatedAt: new Date("2023-10-01T12:00:00Z"),
    },
  ],
  next: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
  previous: "cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ",
  totalCount: 2,
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `results`                                                                      | [components.Delegation](../../models/components/delegation.md)[]               | :heavy_minus_sign:                                                             | The delegations in the result set.                                             |                                                                                |
| `next`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | The cursor with which to continue pagination if additional result pages exist. | cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw                       |
| `previous`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | The cursor used to obtain the current result page.                             | cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ                       |
| `totalCount`                                                                   | *number*                                                                       | :heavy_minus_sign:                                                             | The total number of items in the result set.                                   | 2                                                                              |