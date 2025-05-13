# GroupBindingGroup

# Group Binding Group Object
### Description
The `GroupBindingGroup` object is used to represent a group binding group.

### Usage Example
Get group binding groups from the `GET Group Bindings` endpoint.

## Example Usage

```typescript
import { GroupBindingGroup } from "opal-mcp/models/components";

let value: GroupBindingGroup = {
  groupId: "f454d283-ca87-4a8a-bdbb-df212eca5353",
  groupType: "OKTA_GROUP",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `groupId`                                                            | *string*                                                             | :heavy_check_mark:                                                   | The ID of the group.                                                 | f454d283-ca87-4a8a-bdbb-df212eca5353                                 |
| `groupType`                                                          | [components.GroupTypeEnum](../../models/components/grouptypeenum.md) | :heavy_check_mark:                                                   | The type of the group.                                               | OPAL_GROUP                                                           |