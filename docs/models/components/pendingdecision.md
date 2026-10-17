# PendingDecision

Pending decision staged by the viewer, if any.

## Example Usage

```typescript
import { PendingDecision } from "opal-mcp/models/components";

let value: PendingDecision = "APPROVED";
```

## Values

```typescript
"APPROVED" | "REVOKED" | "CHANGE_ROLE" | "REDUCE_EXPIRATION" | "ADMIN_REVOKED" | "NO_ACTION" | "REASSIGNED"
```