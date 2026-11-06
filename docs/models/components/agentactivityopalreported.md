# AgentActivityOpalReported

# AgentActivityOpalReported Object
### Description
What the sending machine says about who and what it is, added by the Opal hook
script. Every field is optional and **unverified**: whoever controls the machine
controls them. They can disagree, and Opal keeps every one that is present, each cut
to a fixed length (254 characters for an email, 64 for `os_user`, 255 for
`hostname`) with control characters removed.

The emails are also tried, in the order below and after the `X-Opal-Actor` header,
to find the agent, so a person without a git email can still match through their
Claude account.

## Example Usage

```typescript
import { AgentActivityOpalReported } from "opal-mcp/models/components";

let value: AgentActivityOpalReported = {};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `configuredEmail`                                                                    | *string*                                                                             | :heavy_minus_sign:                                                                   | An email set by an administrator, an MDM profile or the installer.                   |
| `claudeAccountEmail`                                                                 | *string*                                                                             | :heavy_minus_sign:                                                                   | The email of the account Claude Code is signed in with.                              |
| `gitEmail`                                                                           | *string*                                                                             | :heavy_minus_sign:                                                                   | The machine's global `git config user.email`.                                        |
| `osUser`                                                                             | *string*                                                                             | :heavy_minus_sign:                                                                   | The operating-system username. Not used to find an agent.                            |
| `hostname`                                                                           | *string*                                                                             | :heavy_minus_sign:                                                                   | The machine's name. The `X-Opal-Host` header wins when it names a different machine. |