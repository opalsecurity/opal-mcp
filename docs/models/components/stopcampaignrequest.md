# StopCampaignRequest

## Example Usage

```typescript
import { StopCampaignRequest } from "opal-mcp/models/components";

let value: StopCampaignRequest = {};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `revokeUnreviewed`                                                                                        | *boolean*                                                                                                 | :heavy_minus_sign:                                                                                        | Revoke all unreviewed access grants. Access grants with no reviewer decision will be immediately revoked. |