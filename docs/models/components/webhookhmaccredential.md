# WebhookHmacCredential

An HMAC credential for webhook authentication.

## Example Usage

```typescript
import { WebhookHmacCredential } from "opal-mcp/models/components";

let value: WebhookHmacCredential = {
  id: "d0cb4a22-411e-4628-8dd1-d1a8f82812db",
  secret: "<value>",
  createdAt: new Date("2026-01-25T03:06:49.843Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The unique identifier for the credential.                                                     |
| `secret`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | The HMAC secret value.                                                                        |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the credential was created.                                                              |