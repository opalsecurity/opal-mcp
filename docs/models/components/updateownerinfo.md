# UpdateOwnerInfo

# UpdateOwnerInfo Object
### Description
The `UpdateOwnerInfo` object is used as an input to the UpdateOwner API.

## Example Usage

```typescript
import { UpdateOwnerInfo } from "opal-mcp/models/components";

let value: UpdateOwnerInfo = {
  ownerId: "f454d283-ca87-4a8a-bdbb-df212eca5353",
  name: "API Owner",
  description: "This owner represents the API team owners.",
  accessRequestEscalationPeriod: 120,
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `ownerId`                                                                                                | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The ID of the owner.                                                                                     | f454d283-ca87-4a8a-bdbb-df212eca5353                                                                     |
| `name`                                                                                                   | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | The name of the owner.                                                                                   | API Owner                                                                                                |
| `description`                                                                                            | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | A description of the owner.                                                                              | This owner represents the API team owners.                                                               |
| `accessRequestEscalationPeriod`                                                                          | *number*                                                                                                 | :heavy_minus_sign:                                                                                       | The amount of time (in minutes) before the next reviewer is notified. Use 0 to remove escalation policy. | 120                                                                                                      |
| `reviewerMessageChannelId`                                                                               | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | The message channel id for the reviewer channel. Use "" to remove an existing message channel.           | 37cb7e41-12ba-46da-92ff-030abe0450b1                                                                     |
| `sourceGroupId`                                                                                          | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | Sync this owner's user list with a source group. Use "" to remove an existing source group.              | 1b978423-db0a-4037-a4cf-f79c60cb67b3                                                                     |