# AgentKillSwitch

# AgentKillSwitch Object
### Description
The org-level agent kill switch, and the activation that is in force or last was.

`active` is what matters; the rest is the record of how it got that way. An
activation is in force only while it has not been deactivated AND `expires_at` is
still in the future, and that is evaluated on every read - so `active` can be
`false` on a row that was never explicitly turned off.

Everything below `active` describes the LATEST activation whether or not it is
still in force, so an admin reading an inactive switch can still see who last
turned it on and when it ended.

## Example Usage

```typescript
import { AgentKillSwitch } from "opal-mcp/models/components";

let value: AgentKillSwitch = {
  active: true,
};
```

## Fields

| Field                                                                                                                                                           | Type                                                                                                                                                            | Required                                                                                                                                                        | Description                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `active`                                                                                                                                                        | *boolean*                                                                                                                                                       | :heavy_check_mark:                                                                                                                                              | Whether agent tool calls are being denied right now. This is the field to read; it already accounts for expiry.                                                 |
| `activatedAt`                                                                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                   | :heavy_minus_sign:                                                                                                                                              | When the latest activation was turned on. Absent if it never has been.                                                                                          |
| `activatedByUserId`                                                                                                                                             | *string*                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                              | The admin who turned it on. Absent when that user has since been hard-deleted - the activation record outlives them deliberately.                               |
| `expiresAt`                                                                                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                   | :heavy_minus_sign:                                                                                                                                              | When the latest activation stops denying on its own. In the past for an activation that already ran out.                                                        |
| `deactivatedAt`                                                                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                   | :heavy_minus_sign:                                                                                                                                              | When the latest activation was turned off before its expiry, either by an admin or by being superseded. Absent when it ended at `expires_at`, or has not ended. |
| `reason`                                                                                                                                                        | *string*                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                              | The admin's stated reason. Not an internal note - it is shown to the developer whose tool call is denied, in their own terminal.                                |