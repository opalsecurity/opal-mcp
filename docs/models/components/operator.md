# Operator

The operator of the reviewer stage. Admin and manager approval are also treated as reviewers. A stage that sets `escalation` must use `OR`; `AND` is rejected there, because the escalation timer joins the stage as an additional reviewer and would otherwise become a required approver that stalls every request until the timeout.

## Example Usage

```typescript
import { Operator } from "opal-mcp/models/components";

let value: Operator = "AND";
```

## Values

```typescript
"AND" | "OR"
```