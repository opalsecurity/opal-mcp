# AgentActivityIngestResult

# AgentActivityIngestResult Object
### Description
What one ingest request actually did.

`received` and `stored` differ when a delivery was retried and deduplicated.
`attributed` and `unattributed` sum to `received` rather than to `stored`, because
attribution happens before deduplication. Unattributed events are kept, not dropped:
activity Opal cannot tie to a governed agent is itself a governance finding.

## Example Usage

```typescript
import { AgentActivityIngestResult } from "opal-mcp/models/components";

let value: AgentActivityIngestResult = {
  received: 720927,
  stored: 137558,
  attributed: 878454,
  unattributed: 893229,
};
```

## Fields

| Field                                                                                                                                                                                                   | Type                                                                                                                                                                                                    | Required                                                                                                                                                                                                | Description                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `received`                                                                                                                                                                                              | *number*                                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                      | Events parsed out of the request body.                                                                                                                                                                  |
| `stored`                                                                                                                                                                                                | *number*                                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                      | Rows actually written. Lower than `received` when a retried delivery was deduplicated on `tool_use_id`.                                                                                                 |
| `attributed`                                                                                                                                                                                            | *number*                                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                      | Events that resolved to an agent in this organization.                                                                                                                                                  |
| `unattributed`                                                                                                                                                                                          | *number*                                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                      | Events that resolved to no agent, and are therefore visible only in the unattributed activity list. A persistently high value means the reporting clients are not sending an identity Opal can resolve. |