# McpConfigServer

# McpConfigServer Object
### Description
One MCP server in a machine's Claude Code configuration. Exactly what the hook kit
sends: no environment values, headers or command arguments.

## Example Usage

```typescript
import { McpConfigServer } from "opal-mcp/models/components";

let value: McpConfigServer = {
  name: "<value>",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `name`                                                          | *string*                                                        | :heavy_check_mark:                                              | The server's name in the configuration.                         |
| `scope`                                                         | *string*                                                        | :heavy_minus_sign:                                              | `user`, `project`, `local`, `managed` or `plugin`.              |
| `transport`                                                     | *string*                                                        | :heavy_minus_sign:                                              | `http`, `sse` or `stdio`.                                       |
| `url`                                                           | *string*                                                        | :heavy_minus_sign:                                              | The server's URL, for an `http` or `sse` server.                |
| `commandHash`                                                   | *string*                                                        | :heavy_minus_sign:                                              | For a `stdio` server, a SHA-256 of its command's shape, in hex. |
| `additionalProperties`                                          | Record<string, *any*>                                           | :heavy_minus_sign:                                              | N/A                                                             |