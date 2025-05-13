# UpdateGroupBindingInfoList

## Example Usage

```typescript
import { UpdateGroupBindingInfoList } from "opal-mcp/models/components";

let value: UpdateGroupBindingInfoList = {
  groupBindings: [
    {
      groupBindingId: "f454d283-ca87-4a8a-bdbb-df212eca5353",
      sourceGroupId: "f454d283-ca87-4a8a-bdbb-df212eca5353",
      groups: [
        {
          groupId: "f454d283-ca87-4a8a-bdbb-df212eca5353",
        },
        {
          groupId: "99d0b81d-14be-4cf6-bd27-348b4af1d11b",
        },
      ],
    },
    {
      groupBindingId: "99d0b81d-14be-4cf6-bd27-348b4af1d11b",
      sourceGroupId: "99d0b81d-14be-4cf6-bd27-348b4af1d11b",
      groups: [
        {
          groupId: "99d0b81d-14be-4cf6-bd27-348b4af1d11b",
        },
        {
          groupId: "f454d283-ca87-4a8a-bdbb-df212eca5353",
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `groupBindings`                                                                          | [components.UpdateGroupBindingInfo](../../models/components/updategroupbindinginfo.md)[] | :heavy_check_mark:                                                                       | A list of group bindings with information to update.                                     |