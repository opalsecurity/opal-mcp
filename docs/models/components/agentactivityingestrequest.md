# AgentActivityIngestRequest

# AgentActivityIngestRequest Object
### Description
A batch of agent activity events.

Three body shapes are accepted: this envelope (`{"events": [...]}`), a bare JSON
array of `AgentActivityEvent`, and a single `AgentActivityEvent` object. The last
exists so a Claude Code hook can POST here directly, since a hook sends one bare
payload per event and cannot wrap it.

## Example Usage

```typescript
import { AgentActivityIngestRequest } from "opal-mcp/models/components";

let value: AgentActivityIngestRequest = {};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `events`                                                                         | [components.AgentActivityEvent](../../models/components/agentactivityevent.md)[] | :heavy_minus_sign:                                                               | N/A                                                                              |
| `additionalProperties`                                                           | Record<string, *any*>                                                            | :heavy_minus_sign:                                                               | N/A                                                                              |