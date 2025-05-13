# ResourceRiskSensitivity

The risk sensitivity level for the resource. When an override is set, this field will match that.

## Example Usage

```typescript
import { ResourceRiskSensitivity } from "opal-mcp/models/components";

let value: ResourceRiskSensitivity = "HIGH";
```

## Values

```typescript
"UNKNOWN" | "CRITICAL" | "HIGH" | "MEDIUM" | "LOW" | "NONE"
```