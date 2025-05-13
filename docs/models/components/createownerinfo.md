# CreateOwnerInfo

# CreateOwnerInfo Object
### Description
The `CreateOwnerInfo` object is used to store creation info for an owner.

### Usage Example
Use in the `POST Owners` endpoint.

## Example Usage

```typescript
import { CreateOwnerInfo } from "opal-mcp/models/components";

let value: CreateOwnerInfo = {
  name: "API Owner",
  description: "This owner represents the API team owners.",
  accessRequestEscalationPeriod: 120,
  userIds: [
    "7870617d-e72a-47f5-a84c-693817ab4567",
    "1520617d-e72a-47f5-a84c-693817ab48ad2",
  ],
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                   | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The name of the owner.                                                                                   | API Owner                                                                                                |
| `description`                                                                                            | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | A description of the owner.                                                                              | This owner represents the API team owners.                                                               |
| `accessRequestEscalationPeriod`                                                                          | *number*                                                                                                 | :heavy_minus_sign:                                                                                       | The amount of time (in minutes) before the next reviewer is notified. Use 0 to remove escalation policy. | 120                                                                                                      |
| `userIds`                                                                                                | *string*[]                                                                                               | :heavy_check_mark:                                                                                       | Users to add to the created owner. If setting a source_group_id this list must be empty.                 | [<br/>"7870617d-e72a-47f5-a84c-693817ab4567",<br/>"1520617d-e72a-47f5-a84c-693817ab48ad2"<br/>]          |
| `reviewerMessageChannelId`                                                                               | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | The message channel id for the reviewer channel.                                                         | 37cb7e41-12ba-46da-92ff-030abe0450b1                                                                     |
| `sourceGroupId`                                                                                          | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | Sync this owner's user list with a source group.                                                         | 1b978423-db0a-4037-a4cf-f79c60cb67b3                                                                     |