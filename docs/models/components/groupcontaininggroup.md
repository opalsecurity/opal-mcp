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

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `containingGroupId`                  | *string*                             | :heavy_check_mark:                   | The groupID of the containing group. | f454d283-ca87-4a8a-bdbb-df212eca5353 |