# UARReviewerAssignmentPolicyEnum

A policy for auto-assigning reviewers. If auto-assignment is on, specific assignments can still be manually adjusted after the access review is started. Default is Manually.

## Example Usage

```typescript
import { UARReviewerAssignmentPolicyEnum } from "opal-mcp/models/components";

let value: UARReviewerAssignmentPolicyEnum = "MANUALLY";
```

## Values

```typescript
"MANUALLY" | "BY_OWNING_TEAM_ADMIN" | "BY_MANAGER"
```