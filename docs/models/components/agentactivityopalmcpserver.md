# AgentActivityOpalMcpServer

# AgentActivityOpalMcpServer Object
### Description
Where the MCP server behind a tool call connects, as the Opal hook kit read it from the
developer's own Claude Code configuration. Claude Code's hook payload names the server
but not where it connects, so the kit adds this for an `mcp__<server>__<tool>` call when
it finds the server in the configuration.

Opal uses it to identify the server in the organization's MCP server registry: by its
URL, or by the hash of its command. The URL is stored without its query, fragment or
user name and password.

## Example Usage

```typescript
import { AgentActivityOpalMcpServer } from "opal-mcp/models/components";

let value: AgentActivityOpalMcpServer = {};
```

## Fields

| Field                                                                                                                                                               | Type                                                                                                                                                                | Required                                                                                                                                                            | Description                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `url`                                                                                                                                                               | *string*                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                  | The server's URL, for an `http` or `sse` server.                                                                                                                    |
| `transport`                                                                                                                                                         | *string*                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                  | `http`, `sse` or `stdio`.                                                                                                                                           |
| `commandHash`                                                                                                                                                       | *string*                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                  | For a `stdio` server, a SHA-256 of its command's shape, in hex. Arguments that can hold a secret are replaced before hashing, and the command itself is never sent. |
| `scope`                                                                                                                                                             | *string*                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                  | The configuration the server was found in, such as `user`, `project`, `local`, `managed` or `plugin`.                                                               |