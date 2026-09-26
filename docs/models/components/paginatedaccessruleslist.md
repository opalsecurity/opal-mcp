# PaginatedAccessRulesList

## Example Usage

```typescript
import { PaginatedAccessRulesList } from "opal-mcp/models/components";

let value: PaginatedAccessRulesList = {
  next: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
  previous: "cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ",
  results: [
    {
      accessRuleId: "7c86c85d-0651-43e2-a748-d69d658418e8",
      name: "Platform Engineering",
      description:
        "This access rule represents all platform engineers in the company.",
      adminOwnerId: "7c86c85d-0651-43e2-a748-d69d658418e8",
      status: "ACTIVE",
      ruleClauses: {
        when: {
          clauses: [
            {
              selectors: [],
            },
          ],
        },
      },
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | The cursor with which to continue pagination if additional result pages exist. | cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw                       |
| `previous`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | The cursor used to retrieve the previous page of results.                      | cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ                       |
| `results`                                                                      | [components.AccessRule](../../models/components/accessrule.md)[]               | :heavy_check_mark:                                                             | N/A                                                                            |                                                                                |