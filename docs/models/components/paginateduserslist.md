# PaginatedUsersList

## Example Usage

```typescript
import { PaginatedUsersList } from "opal-mcp/models/components";

let value: PaginatedUsersList = {
  next: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
  previous: "cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ",
  results: [
    {
      userId: "29827fb8-f2dd-4e80-9576-28e31e9934ac",
      email: "john.doe@company.dev",
      fullName: "John Doe",
      firstName: "John",
      lastName: "Doe",
      position: "Senior Engineer",
    },
    {
      userId: "e8581682-04f7-473a-a419-472f0fb26d46",
      email: "jane.smith@company.dev",
      fullName: "Jane Smith",
      firstName: "John",
      lastName: "Doe",
      position: "Product Marketing Lead",
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | The cursor with which to continue pagination if additional result pages exist. | cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw                       |
| `previous`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | The cursor used to obtain the current result page.                             | cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ                       |
| `results`                                                                      | [components.User](../../models/components/user.md)[]                           | :heavy_check_mark:                                                             | N/A                                                                            |                                                                                |