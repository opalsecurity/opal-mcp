# GroupContainingGroupList

## Example Usage

```typescript
import { GroupContainingGroupList } from "opal-mcp/models/components";

let value: GroupContainingGroupList = {
  containingGroups: [
    {
      containingGroupId: "7870617d-e72a-47f5-a84c-693817ab4567",
    },
    {
      containingGroupId: "50333e67-73ce-47ab-b049-d8abcd45f7a1",
    },
  ],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `containingGroups`                                                                   | [components.GroupContainingGroup](../../models/components/groupcontaininggroup.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |