# CursorGroup

Remote info for a Cursor group.

## Example Usage

```typescript
import { CursorGroup } from "opal-mcp/models/components";

let value: CursorGroup = {
  groupId: "grp_01k2ja2000e0080000000000n2",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `groupId`                                                                                        | *string*                                                                                         | :heavy_check_mark:                                                                               | The id of the Cursor group, or team:members / team:admins for the owning team's built-in groups. | grp_01k2ja2000e0080000000000n2                                                                   |