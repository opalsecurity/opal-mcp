# CreateRequestConfigurationInfoList

# CreateRequestConfigurationInfoList Object
### Description
The `CreateRequestConfigurationInfoList` object is used as an input to the CreateRequestConfigurations API.

### Formatting Requirements
The `CreateRequestConfigurationInfoList` object must contain a list of `RequestConfiguration` objects.
Exactly one default `RequestConfiguration` must be provided.  A default `RequestConfiguration` is one with a `condition` of `null`
and a `priority` of `0`.  The default `RequestConfiguration` will be used when no other `RequestConfiguration` matches the request.

Only one `RequestConfiguration` may be provided for each priority, and the priorities must be contiguous.  For example, if there are
two `RequestConfigurations` with priorities 0 and 2, there must be a `RequestConfiguration` with priority 1.

To use the `condition` field, the `condition` must be a valid JSON object.

The `condition` must be a JSON object with the key `group_ids` (more options may be added in the future), whose value is a list of
group IDs.
The `condition` will match if the user requesting access is a member of any of the groups in the list. Currently, we only support
using a single group as a condition.

## Example Usage

```typescript
import { CreateRequestConfigurationInfoList } from "opal-mcp/models/components";

let value: CreateRequestConfigurationInfoList = {
  requestConfigurations: [
    {
      condition: {
        groupIds: [
          "1b978423-db0a-4037-a4cf-f79c60cb67b3",
        ],
      },
      allowRequests: true,
      autoApproval: false,
      requireMfaToRequest: false,
      maxDurationMinutes: 120,
      recommendedDurationMinutes: 120,
      requireSupportTicket: false,
      reviewerStages: [
        {
          requireManagerApproval: false,
          operator: "AND",
          ownerIds: [
            "37cb7e41-12ba-46da-92ff-030abe0450b1",
            "37cb7e41-12ba-46da-92ff-030abe0450b2",
          ],
        },
      ],
      priority: 0,
    },
    {
      condition: {},
      allowRequests: true,
      autoApproval: false,
      requireMfaToRequest: false,
      maxDurationMinutes: 120,
      recommendedDurationMinutes: 120,
      requireSupportTicket: false,
      reviewerStages: [
        {
          requireManagerApproval: false,
          operator: "AND",
          ownerIds: [
            "37cb7e41-12ba-46da-92ff-030abe0450b1",
            "37cb7e41-12ba-46da-92ff-030abe0450b2",
          ],
        },
      ],
      priority: 1,
    },
  ],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `requestConfigurations`                                                              | [components.RequestConfiguration](../../models/components/requestconfiguration.md)[] | :heavy_check_mark:                                                                   | A list of request configurations to create.                                          |