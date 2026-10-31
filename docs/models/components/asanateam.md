# AsanaTeam

Remote info for Asana Team.

## Example Usage

```typescript
import { AsanaTeam } from "opal-mcp/models/components";

let value: AsanaTeam = {
  teamGid: "<id>",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `teamGid`                            | *string*                             | :heavy_check_mark:                   | The team gid of the Asana Team.      |
| `workspaceGid`                       | *string*                             | :heavy_minus_sign:                   | The workspace gid of the Asana Team. |