# CreateRequestInfoResource

## Example Usage

```typescript
import { CreateRequestInfoResource } from "opal-mcp/models/components";

let value: CreateRequestInfoResource = {
  id: "group283-ca87-4a8a-bdbb-df212eca5353",
  accessLevelRemoteId: "arn:aws:iam::490306337630:role/SupportUser",
  accessLevelName: "arn:aws:iam::490306337630:role/SupportUser",
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         | Example                                                                             |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `id`                                                                                | *string*                                                                            | :heavy_minus_sign:                                                                  | The ID of the resource requested. Should not be specified if group_id is specified. | group283-ca87-4a8a-bdbb-df212eca5353                                                |
| `accessLevelRemoteId`                                                               | *string*                                                                            | :heavy_minus_sign:                                                                  | The ID of the access level requested on the remote system.                          | arn:aws:iam::490306337630:role/SupportUser                                          |
| `accessLevelName`                                                                   | *string*                                                                            | :heavy_minus_sign:                                                                  | The ID of the access level requested on the remote system.                          | arn:aws:iam::490306337630:role/SupportUser                                          |