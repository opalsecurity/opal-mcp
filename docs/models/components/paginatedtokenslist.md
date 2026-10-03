# PaginatedTokensList

## Example Usage

```typescript
import { PaginatedTokensList } from "opal-mcp/models/components";

let value: PaginatedTokensList = {
  next: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
  previous: "cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ",
  results: [
    {
      tokenId: "f454d283-ca87-4a8a-bdbb-df212eca5353",
      createdAt: new Date("2022-01-23T04:56:07Z"),
      tokenLabel: "My API Token",
      creatorUserId: "d4a7d928-783e-4599-8ec6-088d635a5bcc",
      userId: "d4a7d928-783e-4599-8ec6-088d635a5bcc",
      accessLevel: "READ_ONLY",
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | The cursor with which to continue pagination if additional result pages exist. | cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw                       |
| `previous`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | The cursor used to obtain the current result page.                             | cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ                       |
| `results`                                                                      | [components.Token](../../models/components/token.md)[]                         | :heavy_check_mark:                                                             | N/A                                                                            |                                                                                |