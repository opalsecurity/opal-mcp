# CreateGroupBindingInfo

# CreateGroupBindingInfo Object
### Description
The `CreateGroupBindingInfo` object is used as an input to the CreateGroupBinding API.

## Example Usage

```typescript
import { CreateGroupBindingInfo } from "opal-mcp/models/components";

let value: CreateGroupBindingInfo = {
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
| `sourceGroupId`                                                                                    | *string*                                                                                           | :heavy_check_mark:                                                                                 | The ID of the source group.                                                                        | f454d283-ca87-4a8a-bdbb-df212eca5353                                                               |
| `groups`                                                                                           | [components.CreateGroupBindingInfoGroup](../../models/components/creategroupbindinginfogroup.md)[] | :heavy_check_mark:                                                                                 | The list of groups.                                                                                |                                                                                                    |