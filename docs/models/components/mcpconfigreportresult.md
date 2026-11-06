# McpConfigReportResult

# McpConfigReportResult Object
### Description
What one configuration report did.

## Example Usage

```typescript
import { McpConfigReportResult } from "opal-mcp/models/components";

let value: McpConfigReportResult = {
  received: 249053,
  recorded: 296737,
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `received`                                                                                                                         | *number*                                                                                                                           | :heavy_check_mark:                                                                                                                 | Servers in the report.                                                                                                             |
| `recorded`                                                                                                                         | *number*                                                                                                                           | :heavy_check_mark:                                                                                                                 | Servers recorded in the registry. Lower than `received` when an entry had neither a name Opal could use nor a URL or command hash. |