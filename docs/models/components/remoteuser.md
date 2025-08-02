# RemoteUser

# RemoteUser Object
### Description
The `RemoteUser` object is used to represent a remote user.

## Example Usage

```typescript
import { RemoteUser } from "opal-mcp/models/components";

let value: RemoteUser = {
  userId: "29827fb8-f2dd-4e80-9576-28e31e9934ac",
  remoteId: "1234567890",
  thirdPartyProvider: "GIT_HUB",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `userId`                                                                               | *string*                                                                               | :heavy_check_mark:                                                                     | The ID of the user.                                                                    | 29827fb8-f2dd-4e80-9576-28e31e9934ac                                                   |
| `remoteId`                                                                             | *string*                                                                               | :heavy_check_mark:                                                                     | The ID of the remote user.                                                             | 1234567890                                                                             |
| `thirdPartyProvider`                                                                   | [components.ThirdPartyProviderEnum](../../models/components/thirdpartyproviderenum.md) | :heavy_check_mark:                                                                     | The third party provider of the remote user.                                           | GIT_HUB                                                                                |