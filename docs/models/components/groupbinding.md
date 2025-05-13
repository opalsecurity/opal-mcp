# GroupBinding

# Group Binding Object
### Description
The `GroupBinding` object is used to represent a group binding.

### Usage Example
Get group bindings from the `GET Group Bindings` endpoint.

## Example Usage

```typescript
import { GroupBinding } from "opal-mcp/models/components";

let value: GroupBinding = {
  groupBindingId: "f454d283-ca87-4a8a-bdbb-df212eca5353",
  createdById: "99d0b81d-14be-4cf6-bd27-348b4af1d11b",
  createdAt: new Date("2022-01-23T04:56:07Z"),
  sourceGroupId: "f454d283-ca87-4a8a-bdbb-df212eca5353",
  groups: [
    {
      groupId: "f454d283-ca87-4a8a-bdbb-df212eca5353",
      groupType: "OKTA_GROUP",
    },
    {
      groupId: "99d0b81d-14be-4cf6-bd27-348b4af1d11b",
      groupType: "AWS_SSO_GROUP",
    },
  ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `groupBindingId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the group binding.                                                                  | f454d283-ca87-4a8a-bdbb-df212eca5353                                                          |
| `createdById`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the user that created the group binding.                                            | 99d0b81d-14be-4cf6-bd27-348b4af1d11b                                                          |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The date the group binding was created.                                                       | 2022-01-23 04:56:07 +0000 UTC                                                                 |
| `sourceGroupId`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the source group.                                                                   | f454d283-ca87-4a8a-bdbb-df212eca5353                                                          |
| `groups`                                                                                      | [components.GroupBindingGroup](../../models/components/groupbindinggroup.md)[]                | :heavy_check_mark:                                                                            | The list of groups.                                                                           |                                                                                               |