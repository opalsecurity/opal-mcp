# CampaignItemReviewDecision

The reviewer's decision. Null when the reviewer has not yet
submitted.


## Example Usage

```typescript
import { CampaignItemReviewDecision } from "opal-mcp/models/components";

let value: CampaignItemReviewDecision = "APPROVED";
```

## Values

```typescript
"APPROVED" | "REVOKED" | "CHANGE_ROLE" | "ADMIN_REVOKED" | "NO_ACTION" | "REASSIGNED" | "ADMIN_OVERRIDE_APPROVED" | "ADMIN_OVERRIDE_REVOKED"
```