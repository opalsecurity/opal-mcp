# UpdateGroupInfoList

## Example Usage

```typescript
import { UpdateGroupInfoList } from "opal-mcp/models/components";

let value: UpdateGroupInfoList = {
  groups: [
    {
      groupId: "f454d283-ca87-4a8a-bdbb-df212eca5353",
      name: "api-group",
      description:
        "This group represents Active Directory group \"Payments Production Admin\". We use this AD group to facilitate staging deployments and qualifying new releases.",
      adminOwnerId: "7c86c85d-0651-43e2-a748-d69d658418e8",
      maxDuration: 120,
      requireManagerApproval: false,
      requireSupportTicket: false,
    },
    {
      groupId: "99d0b81d-14be-4cf6-bd27-348b4af1d11b",
      name: "on-call-integrations",
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

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `groups`                                                                   | [components.UpdateGroupInfo](../../models/components/updategroupinfo.md)[] | :heavy_check_mark:                                                         | A list of groups with information to update.                               |