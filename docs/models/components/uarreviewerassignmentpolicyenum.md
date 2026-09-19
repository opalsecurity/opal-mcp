# UARReviewerAssignmentPolicyEnum

A policy for auto-assigning reviewers. If auto-assignment is on, specific assignments can still be manually adjusted after the access review is started. Default is Manually. BY_OWNING_TEAM_ADMIN assigns reviews to resource admins in round-robin fashion. BY_OWNING_TEAM_ADMIN_ALL assigns reviews to all resource admins. BY_APPROVERS assigns reviews to resource approvers in round-robin fashion. BY_APPROVERS_ALL assigns reviews to all resource approvers.

## Example Usage

```typescript
import { UARReviewerAssignmentPolicyEnum } from "opal-mcp/models/components";

let value: UARReviewerAssignmentPolicyEnum = "MANUALLY";
```

## Values

```typescript
"MANUALLY" | "BY_OWNING_TEAM_ADMIN" | "BY_OWNING_TEAM_ADMIN_ALL" | "BY_MANAGER" | "BY_APPROVERS" | "BY_APPROVERS_ALL"
```