# GetRemoteUsersRequest

## Example Usage

```typescript
import { GetRemoteUsersRequest } from "opal-mcp/models/operations";

let value: GetRemoteUsersRequest = {
  thirdPartyProvider: [
    "GIT_HUB",
  ],
  userId: [
    "32acc112-21ff-4669-91c2-21e27683eaa1",
  ],
  remoteId: [
    "1234567890",
  ],
  cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
  pageSize: 200,
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `thirdPartyProvider`                                                                     | [components.ThirdPartyProviderEnum](../../models/components/thirdpartyproviderenum.md)[] | :heavy_minus_sign:                                                                       | Filter remote users by their third party provider.                                       | [<br/>"GIT_HUB"<br/>]                                                                    |
| `userId`                                                                                 | *string*[]                                                                               | :heavy_minus_sign:                                                                       | Filter remote users by their user ID.                                                    | [<br/>"32acc112-21ff-4669-91c2-21e27683eaa1"<br/>]                                       |
| `remoteId`                                                                               | *string*[]                                                                               | :heavy_minus_sign:                                                                       | Filter remote users by their remote ID.                                                  | [<br/>1234567890<br/>]                                                                   |
| `cursor`                                                                                 | *string*                                                                                 | :heavy_minus_sign:                                                                       | The pagination cursor value.                                                             | cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw                                 |
| `pageSize`                                                                               | *number*                                                                                 | :heavy_minus_sign:                                                                       | Number of results to return per page. Default is 200.                                    | 200                                                                                      |