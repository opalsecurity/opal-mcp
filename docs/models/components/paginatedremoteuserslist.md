# PaginatedRemoteUsersList

## Example Usage

```typescript
import { PaginatedRemoteUsersList } from "opal-mcp/models/components";

let value: PaginatedRemoteUsersList = {
  next: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
  previous: "cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ",
  results: [
    {
      userId: "29827fb8-f2dd-4e80-9576-28e31e9934ac",
      remoteId: "1234567890",
      thirdPartyProvider: "GIT_LAB",
    },
    {
      userId: "29827fb8-f2dd-4e80-9576-238979927392",
      remoteId: "remoteid123",
      thirdPartyProvider: "GIT_HUB",
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | The cursor with which to continue pagination if additional result pages exist. | cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw                       |
| `previous`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | The cursor used to obtain the current result page.                             | cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ                       |
| `results`                                                                      | [components.RemoteUser](../../models/components/remoteuser.md)[]               | :heavy_check_mark:                                                             | N/A                                                                            |                                                                                |