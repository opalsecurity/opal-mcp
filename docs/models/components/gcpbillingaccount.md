# GcpBillingAccount

Remote info for a GCP billing account.

## Example Usage

```typescript
import { GcpBillingAccount } from "opal-mcp/models/components";

let value: GcpBillingAccount = {
  billingAccountId: "billingAccounts/012345-567890-ABCDEF",
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               | Example                                   |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `billingAccountId`                        | *string*                                  | :heavy_check_mark:                        | The resource name of the billing account. | billingAccounts/012345-567890-ABCDEF      |