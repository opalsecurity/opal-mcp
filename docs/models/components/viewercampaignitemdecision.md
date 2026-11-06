# ViewerCampaignItemDecision

The reviewer's decision. Null when undecided.

## Example Usage

```typescript
import { ViewerCampaignItemDecision } from "opal-mcp/models/components";

let value: ViewerCampaignItemDecision = "APPROVED";
```

## Values

```typescript
"APPROVED" | "REVOKED" | "CHANGE_ROLE" | "REDUCE_EXPIRATION" | "ADMIN_REVOKED" | "NO_ACTION" | "REASSIGNED"
```