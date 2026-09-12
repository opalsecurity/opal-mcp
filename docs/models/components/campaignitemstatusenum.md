# CampaignItemStatusEnum

Derived aggregate status for a campaign item. Matches the admin Reviews
tab Status column labels (undecided items on a stopped campaign are
PENDING, not a separate stopped status).


## Example Usage

```typescript
import { CampaignItemStatusEnum } from "opal-mcp/models/components";

let value: CampaignItemStatusEnum = "PENDING";
```

## Values

```typescript
"PENDING" | "COMPLETED" | "APPROVED" | "REVOKED" | "NO_ACTION" | "CHANGED_ROLE" | "ADMIN_REVOKED"
```