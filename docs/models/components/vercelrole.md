# VercelRole

Remote info for Vercel team role.

## Example Usage

```typescript
import { VercelRole } from "opal-mcp/models/components";

let value: VercelRole = {
  roleId: "CONTRIBUTOR",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `roleId`                                                           | *string*                                                           | :heavy_check_mark:                                                 | The Vercel team role identifier (e.g. OWNER, MEMBER, CONTRIBUTOR). | CONTRIBUTOR                                                        |