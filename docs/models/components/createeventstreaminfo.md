# CreateEventStreamInfo

Information needed to create an event stream.

## Example Usage

```typescript
import { CreateEventStreamInfo } from "opal-mcp/models/components";

let value: CreateEventStreamInfo = {
  name: "<value>",
  connectionType: "WEBHOOK",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `name`                                                                                               | *string*                                                                                             | :heavy_check_mark:                                                                                   | The name for the event stream.                                                                       |
| `connectionType`                                                                                     | [components.EventStreamConnectionTypeEnum](../../models/components/eventstreamconnectiontypeenum.md) | :heavy_check_mark:                                                                                   | The type of event stream connection.                                                                 |
| `webhookUrl`                                                                                         | *string*                                                                                             | :heavy_minus_sign:                                                                                   | The webhook URL. Required when connection_type is WEBHOOK.                                           |
| `credentials`                                                                                        | [components.WebhookCredentials](../../models/components/webhookcredentials.md)                       | :heavy_minus_sign:                                                                                   | Authentication credentials for a webhook connection.                                                 |