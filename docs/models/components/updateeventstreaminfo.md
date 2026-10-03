# UpdateEventStreamInfo

Information needed to update an event stream.

## Example Usage

```typescript
import { UpdateEventStreamInfo } from "opal-mcp/models/components";

let value: UpdateEventStreamInfo = {};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `name`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Updated name for the event stream.                                             |
| `enabled`                                                                      | *boolean*                                                                      | :heavy_minus_sign:                                                             | Whether the event stream should be enabled.                                    |
| `webhookUrl`                                                                   | *string*                                                                       | :heavy_minus_sign:                                                             | Updated webhook URL.                                                           |
| `credentials`                                                                  | [components.WebhookCredentials](../../models/components/webhookcredentials.md) | :heavy_minus_sign:                                                             | Authentication credentials for a webhook connection.                           |