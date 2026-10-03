# GroupContainingGroup

# GroupContainingGroup Object
### Description
The `GroupContainingGroup` object is used to represent a relationship between a group and a group.

## Example Usage

```typescript
import { GroupContainingGroup } from "opal-mcp/models/components";

let value: GroupContainingGroup = {
  containingGroupId: "f454d283-ca87-4a8a-bdbb-df212eca5353",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `containingGroupId`                                                                          | *string*                                                                                     | :heavy_check_mark:                                                                           | The groupID of the containing group.                                                         | f454d283-ca87-4a8a-bdbb-df212eca5353                                                         |
| `durationMinutes`                                                                            | *number*                                                                                     | :heavy_minus_sign:                                                                           | The updated duration for which the group can be accessed (in minutes). Use 0 for indefinite. | 120                                                                                          |
| `accessLevelRemoteId`                                                                        | *string*                                                                                     | :heavy_minus_sign:                                                                           | The updated remote ID of the access level granted to this group.                             | arn:aws:iam::590304332660:role/ReadOnlyAccess                                                |