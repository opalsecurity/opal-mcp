# AzureSubscription

Remote info for Azure subscription.

## Example Usage

```typescript
import { AzureSubscription } from "opal-mcp/models/components";

let value: AzureSubscription = {
  resourceId: "/subscriptions/00000000-0000-0000-0000-000000000000",
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         | Example                                             |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `resourceId`                                        | *string*                                            | :heavy_check_mark:                                  | The ARM resource ID of the subscription.            | /subscriptions/00000000-0000-0000-0000-000000000000 |