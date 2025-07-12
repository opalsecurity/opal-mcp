# RequestedItem

# Requested Item Object
### Description
The `RequestedItem` object is used to represent a request target item.

### Usage Example
Returned from the `GET Requests` endpoint.

## Example Usage

```typescript
import { RequestedItem } from "opal-mcp/models/components";

let value: RequestedItem = {
  resourceId: "f454d283-ca87-4a8a-bdbb-df212eca5353",
  groupId: "f454d283-ca87-4a8a-bdbb-df212eca5353",
  accessLevelName: "admin",
  accessLevelRemoteId: "arn:aws:iam::490306337630:role/SupportUser",
  name: "Engineering Team",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `resourceId`                                               | *string*                                                   | :heavy_minus_sign:                                         | The ID of the resource requested.                          | f454d283-ca87-4a8a-bdbb-df212eca5353                       |
| `groupId`                                                  | *string*                                                   | :heavy_minus_sign:                                         | The ID of the group requested.                             | f454d283-ca87-4a8a-bdbb-df212eca5353                       |
| `accessLevelName`                                          | *string*                                                   | :heavy_minus_sign:                                         | The name of the access level requested.                    | admin                                                      |
| `accessLevelRemoteId`                                      | *string*                                                   | :heavy_minus_sign:                                         | The ID of the access level requested on the remote system. | arn:aws:iam::490306337630:role/SupportUser                 |
| `name`                                                     | *string*                                                   | :heavy_minus_sign:                                         | The name of the target.                                    | Engineering Team                                           |
| `remoteId`                                                 | *string*                                                   | :heavy_minus_sign:                                         | The ID of the target on the remote system.                 | arn:aws:iam::490306337630:role/SupportUser                 |
| `remoteName`                                               | *string*                                                   | :heavy_minus_sign:                                         | The name of the target on the remote system.               | SupportUser                                                |