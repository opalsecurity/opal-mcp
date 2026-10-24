# RampRole

Remote info for Ramp built-in role.

## Example Usage

```typescript
import { RampRole } from "opal-mcp/models/components";

let value: RampRole = {
  role: "BUSINESS_USER",
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       | Example                                           |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `role`                                            | *string*                                          | :heavy_check_mark:                                | The Ramp built-in role enum (e.g. BUSINESS_USER). | BUSINESS_USER                                     |