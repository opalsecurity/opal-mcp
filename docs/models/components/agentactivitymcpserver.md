# AgentActivityMcpServer

# AgentActivityMcpServer Object
### Description
The MCP server behind a tool call, as Claude Code reports it. Claude Code v2.1.274 and
later adds this object to the hook input of an MCP tool call; an older client does not
send it, and it is never present for a built-in tool such as `Bash`.

When `name` is present it is stored as the call's server. When this object is absent,
the server is read from `tool_name` instead: the part after the `mcp__` prefix and
before the next `__`. The tool is always read from `tool_name`.

Only `name` is read. `source` says where the server's definition came from (`plugin`,
`sdk`, or a configuration scope such as `user` or `project`) and is parsed and
**discarded**. Neither field is an identity: `name` is whatever the user called the
server in their own configuration.

## Example Usage

```typescript
import { AgentActivityMcpServer } from "opal-mcp/models/components";

let value: AgentActivityMcpServer = {};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `name`                                                                                             | *string*                                                                                           | :heavy_minus_sign:                                                                                 | The server's name.                                                                                 |
| `source`                                                                                           | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Where the server's definition came from, such as `plugin`, `sdk`, `user` or `project`. Not stored. |