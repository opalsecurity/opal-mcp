# PaginatedGroupsList

## Example Usage

```typescript
import { PaginatedGroupsList } from "opal-mcp/models/components";

let value: PaginatedGroupsList = {
  next: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
  previous: "cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ",
  results: [
    {
      groupId: "f454d283-ca87-4a8a-bdbb-df212eca5353",
      appId: "b5a5ca27-0ea3-4d86-9199-2126d57d1fbd",
      description:
        "This group represents Active Directory group \"Payments Production Admin\". We use this AD group to facilitate staging deployments and qualifying new releases.",
      adminOwnerId: "7c86c85d-0651-43e2-a748-d69d658418e8",
      maxDuration: 120,
      requireManagerApproval: false,
      requireSupportTicket: false,
    },
    {
      groupId: "99d0b81d-14be-4cf6-bd27-348b4af1d11b",
      description:
        "Manages the Integrations Team on-call privileged resources. This group is automatically synced with the on-call rotation defined in PagerDuty.",
      adminOwnerId: "4220bc12-ab8a-4b5d-be7b-f6bbcf9159f3",
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
| `results`                                                                      | [components.Group](../../models/components/group.md)[]                         | :heavy_check_mark:                                                             | N/A                                                                            |                                                                                |