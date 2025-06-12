# UserHrIdpStatusEnum

Represents the current status of a user as reported by the HR/IDP provider.

### Status Definitions
- `ACTIVE`: User is currently employed and should have appropriate access
- `SUSPENDED`: User access temporarily restricted (e.g., leave of absence)
- `DEPROVISIONED`: User has been offboarded but record retained
- `DELETED`: User record has been removed from HR system
- `NOT_FOUND`: User doesn't exist in HR/IDP system

### MCP Status Handling
```typescript
function handleUserStatusChange(user: User) {
  switch (user.hr_idp_status) {
    case 'ACTIVE':
      return enableUserAccess(user.user_id);
    case 'SUSPENDED':
      return suspendUserAccess(user.user_id);
    case 'DEPROVISIONED':
    case 'DELETED':
      return revokeUserAccess(user.user_id);
    case 'NOT_FOUND':
      return flagUserForReview(user.user_id);
  }
}
```


## Example Usage

```typescript
import { UserHrIdpStatusEnum } from "opal-mcp/models/components";

let value: UserHrIdpStatusEnum = "ACTIVE";
```

## Values

```typescript
"ACTIVE" | "SUSPENDED" | "DEPROVISIONED" | "DELETED" | "NOT_FOUND"
```