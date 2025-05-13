# CreateRequestInfo

All the information needed for creating a request

## Example Usage

```typescript
import { CreateRequestInfo } from "opal-mcp/models/components";

let value: CreateRequestInfo = {
  resources: [
    {
      id: "group283-ca87-4a8a-bdbb-df212eca5353",
      accessLevelRemoteId: "arn:aws:iam::490306337630:role/SupportUser",
      accessLevelName: "arn:aws:iam::490306337630:role/SupportUser",
    },
  ],
  groups: [
    {
      id: "f454d283-ca87-4a8a-bdbb-df212eca5353",
      accessLevelRemoteId: "arn:aws:iam::490306337630:role/SupportUser",
      accessLevelName: "arn:aws:iam::490306337630:role/SupportUser",
    },
  ],
  targetUserId: "userd283-ca87-4a8a-bdbb-df212eca5353",
  targetGroupId: "userd283-ca87-4a8a-bdbb-df212eca5353",
  reason: "<value>",
  supportTicket: {
    ticketingProvider: "LINEAR",
    remoteId: "<id>",
    identifier: "<value>",
    url: "https://tight-bug.com",
  },
  durationMinutes: 577542,
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       | Example                                                                                           |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `resources`                                                                                       | [components.CreateRequestInfoResource](../../models/components/createrequestinforesource.md)[]    | :heavy_check_mark:                                                                                | N/A                                                                                               |                                                                                                   |
| `groups`                                                                                          | [components.CreateRequestInfoGroup](../../models/components/createrequestinfogroup.md)[]          | :heavy_check_mark:                                                                                | N/A                                                                                               |                                                                                                   |
| `targetUserId`                                                                                    | *string*                                                                                          | :heavy_minus_sign:                                                                                | The ID of the user to be granted access. Should not be specified if target_group_id is specified. | userd283-ca87-4a8a-bdbb-df212eca5353                                                              |
| `targetGroupId`                                                                                   | *string*                                                                                          | :heavy_minus_sign:                                                                                | The ID of the group the request is for.  Should not be specified if target_user_id is specified.  | userd283-ca87-4a8a-bdbb-df212eca5353                                                              |
| `reason`                                                                                          | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |                                                                                                   |
| `supportTicket`                                                                                   | [components.SupportTicket](../../models/components/supportticket.md)                              | :heavy_minus_sign:                                                                                | N/A                                                                                               |                                                                                                   |
| `durationMinutes`                                                                                 | *number*                                                                                          | :heavy_check_mark:                                                                                | The duration of the request in minutes. -1 represents an indefinite duration                      |                                                                                                   |
| `customMetadata`                                                                                  | [components.CustomMetadatum](../../models/components/custommetadatum.md)[]                        | :heavy_minus_sign:                                                                                | N/A                                                                                               |                                                                                                   |