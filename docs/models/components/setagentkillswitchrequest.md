# SetAgentKillSwitchRequest

# SetAgentKillSwitchRequest Object
### Description
Turns the agent kill switch on or off.

Setting `active` to `true` while it is already on supersedes the current activation
rather than extending it: the old row keeps its own reason and window as part of the
audit trail, and a new one starts.

## Example Usage

```typescript
import { SetAgentKillSwitchRequest } from "opal-mcp/models/components";

let value: SetAgentKillSwitchRequest = {
  active: false,
};
```

## Fields

| Field                                                                                                                                                                                                                     | Type                                                                                                                                                                                                                      | Required                                                                                                                                                                                                                  | Description                                                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `active`                                                                                                                                                                                                                  | *boolean*                                                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                                        | True denies agent tool calls for this organization; false lifts the denial.                                                                                                                                               |
| `durationMinutes`                                                                                                                                                                                                         | *number*                                                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                        | How long the denial lasts, from now. Ignored when `active` is false. Capped server-side - a kill switch with no end is how an organization discovers months later that its engineers have been quietly working around it. |
| `reason`                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                        | Why. Shown verbatim to the developer whose tool call is denied, so write it for them rather than for the audit log - it is the only explanation they get.                                                                 |