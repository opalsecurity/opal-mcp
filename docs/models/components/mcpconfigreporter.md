# McpConfigReporter

# McpConfigReporter Object
### Description
Who the reporting machine says it belongs to. Unverified, like `X-Opal-Actor`.

## Example Usage

```typescript
import { McpConfigReporter } from "opal-mcp/models/components";

let value: McpConfigReporter = {};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `configuredEmail`      | *string*               | :heavy_minus_sign:     | N/A                    |
| `claudeAccountEmail`   | *string*               | :heavy_minus_sign:     | N/A                    |
| `gitEmail`             | *string*               | :heavy_minus_sign:     | N/A                    |
| `osUser`               | *string*               | :heavy_minus_sign:     | N/A                    |
| `additionalProperties` | Record<string, *any*>  | :heavy_minus_sign:     | N/A                    |