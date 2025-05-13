# PaginatedResourcesList

## Example Usage

```typescript
import { PaginatedResourcesList } from "opal-mcp/models/components";

let value: PaginatedResourcesList = {
  next: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
  previous: "cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ",
  results: [
    {
      resourceId: "f454d283-ca67-4a8a-bdbb-df212eca5353",
      description: "This resource represents AWS IAM role \"SupportUser\".",
      adminOwnerId: "7c86c85d-0651-43e2-a748-d69d658418e8",
      maxDuration: 120,
      requireManagerApproval: false,
      requireSupportTicket: false,
      parentResourceId: "f454d283-ca67-4a8a-bdbb-df212eca5345",
    },
    {
      resourceId: "99d0b81d-14be-4cf6-bd27-348b4af1d11b",
      description: "This resource represents GCP project \"app-demo\".",
      adminOwnerId: "7c86c85d-0651-43e2-a748-d69d658418e8",
      maxDuration: 360,
      requireManagerApproval: false,
      requireSupportTicket: true,
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | The cursor with which to continue pagination if additional result pages exist. | cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw                       |
| `previous`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | The cursor used to obtain the current result page.                             | cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ                       |
| `results`                                                                      | [components.Resource](../../models/components/resource.md)[]                   | :heavy_check_mark:                                                             | N/A                                                                            |                                                                                |