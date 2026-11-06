# Source

The channel that created the request. Omitted when the source was not recorded.
MCP counts only OAuth sessions. An agent using an API token or a person's
credentials is counted as API, CLI, or WEB.

## Example Usage

```typescript
import { Source } from "opal-mcp/models/components";

let value: Source = "WEB";
```

## Values

```typescript
"WEB" | "SLACK" | "MICROSOFT_TEAMS" | "CLI" | "API" | "MCP" | "ACCESS_REVIEW"
```