# PaginatedOwnersList

## Example Usage

```typescript
import { PaginatedOwnersList } from "opal-mcp/models/components";

let value: PaginatedOwnersList = {
  next: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
  previous: "cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ",
  results: [
    {
      ownerId: "f454d283-ca87-4a8a-bdbb-df212eca5353",
      name: "API Owner",
      description: "This owner represents the API team owners.",
      accessRequestEscalationPeriod: 120,
    },
    {
      ownerId: "e8581682-04f7-473a-a419-472f0fb26d46",
      name: "Finance Owner",
      description: "This owner represents the Finance team owners.",
      accessRequestEscalationPeriod: 120,
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | The cursor with which to continue pagination if additional result pages exist. | cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw                       |
| `previous`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | The cursor used to obtain the current result page.                             | cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ                       |
| `results`                                                                      | [components.Owner](../../models/components/owner.md)[]                         | :heavy_check_mark:                                                             | N/A                                                                            |                                                                                |