# UpdateGroupBindingInfo

# UpdateGroupBindingInfo Object
### Description
The `UpdateGroupBindingInfo` object is used as an input to the UpdateGroupBinding API.

## Example Usage

```typescript
import { UpdateGroupBindingInfo } from "opal-mcp/models/components";

let value: UpdateGroupBindingInfo = {
  groupBindingId: "0ae19dbf-324d-4216-999c-574d46182c7e",
  sourceGroupId: "f454d283-ca87-4a8a-bdbb-df212eca5353",
  groups: [
    {
      groupId: "f454d283-ca87-4a8a-bdbb-df212eca5353",
    },
    {
      groupId: "99d0b81d-14be-4cf6-bd27-348b4af1d11b",
    },
  ],
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `groupBindingId`                                                                                   | *string*                                                                                           | :heavy_check_mark:                                                                                 | The ID of the group binding.                                                                       | 0ae19dbf-324d-4216-999c-574d46182c7e                                                               |
| `sourceGroupId`                                                                                    | *string*                                                                                           | :heavy_check_mark:                                                                                 | The ID of the source group.                                                                        | f454d283-ca87-4a8a-bdbb-df212eca5353                                                               |
| `groups`                                                                                           | [components.UpdateGroupBindingInfoGroup](../../models/components/updategroupbindinginfogroup.md)[] | :heavy_check_mark:                                                                                 | The list of groups.                                                                                |                                                                                                    |