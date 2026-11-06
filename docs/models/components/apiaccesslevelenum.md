# ApiAccessLevelEnum

The access level of an API token. AGENT_HOOKS tokens are made only by the Claude Code hook kit's browser sign-in and can only report agent activity; they cannot be created through this API.

## Example Usage

```typescript
import { ApiAccessLevelEnum } from "opal-mcp/models/components";

let value: ApiAccessLevelEnum = "AGENT_HOOKS";
```

## Values

```typescript
"READ_ONLY" | "FULL_ACCESS" | "AGENT_HOOKS"
```