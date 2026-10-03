# WebhookApiKeyCredential

An API key credential for webhook authentication.

## Example Usage

```typescript
import { WebhookApiKeyCredential } from "opal-mcp/models/components";

let value: WebhookApiKeyCredential = {
  id: "64b0586f-ebde-47ff-a648-c6384ea2cd52",
  name: "<value>",
  value: "<value>",
  location: "QUERY_PARAM",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `id`                                                                                         | *string*                                                                                     | :heavy_check_mark:                                                                           | The unique identifier for the credential.                                                    |
| `name`                                                                                       | *string*                                                                                     | :heavy_check_mark:                                                                           | The name of the API key.                                                                     |
| `value`                                                                                      | *string*                                                                                     | :heavy_check_mark:                                                                           | The value of the API key.                                                                    |
| `location`                                                                                   | [components.WebhookApiKeyLocationEnum](../../models/components/webhookapikeylocationenum.md) | :heavy_check_mark:                                                                           | Where the API key is placed in webhook requests.                                             |