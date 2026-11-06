# McpConfigReport

# McpConfigReport Object
### Description
The MCP servers configured in Claude Code on one machine.

## Example Usage

```typescript
import { McpConfigReport } from "opal-mcp/models/components";

let value: McpConfigReport = {
  servers: [],
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `servers`                                                                                                                 | [components.McpConfigServer](../../models/components/mcpconfigserver.md)[]                                                | :heavy_check_mark:                                                                                                        | N/A                                                                                                                       |
| `reporter`                                                                                                                | [components.McpConfigReporter](../../models/components/mcpconfigreporter.md)                                              | :heavy_minus_sign:                                                                                                        | # McpConfigReporter Object<br/>### Description<br/>Who the reporting machine says it belongs to. Unverified, like `X-Opal-Actor`. |
| `additionalProperties`                                                                                                    | Record<string, *any*>                                                                                                     | :heavy_minus_sign:                                                                                                        | N/A                                                                                                                       |