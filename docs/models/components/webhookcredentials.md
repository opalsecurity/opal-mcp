# WebhookCredentials

Authentication credentials for a webhook connection.

## Example Usage

```typescript
import { WebhookCredentials } from "opal-mcp/models/components";

let value: WebhookCredentials = {
  authType: "NONE",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `authType`                                                                                 | [components.WebhookAuthTypeEnum](../../models/components/webhookauthtypeenum.md)           | :heavy_check_mark:                                                                         | The authentication type for webhook connections.                                           |
| `apiKeyCredentials`                                                                        | [components.WebhookApiKeyCredential](../../models/components/webhookapikeycredential.md)[] | :heavy_minus_sign:                                                                         | API key credentials, present when auth_type is API_KEY.                                    |
| `hmacCredential1`                                                                          | [components.WebhookHmacCredential](../../models/components/webhookhmaccredential.md)       | :heavy_minus_sign:                                                                         | An HMAC credential for webhook authentication.                                             |
| `hmacCredential2`                                                                          | [components.WebhookHmacCredential](../../models/components/webhookhmaccredential.md)       | :heavy_minus_sign:                                                                         | An HMAC credential for webhook authentication.                                             |