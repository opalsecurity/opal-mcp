# EventStreamConnection

The connection configuration for an event stream.

## Example Usage

```typescript
import { EventStreamConnection } from "opal-mcp/models/components";

let value: EventStreamConnection = {
  name: "<value>",
  connectionType: "WEBHOOK",
  enabled: true,
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `name`                                                                                               | *string*                                                                                             | :heavy_check_mark:                                                                                   | The name of the connection.                                                                          |
| `connectionType`                                                                                     | [components.EventStreamConnectionTypeEnum](../../models/components/eventstreamconnectiontypeenum.md) | :heavy_check_mark:                                                                                   | The type of event stream connection.                                                                 |
| `enabled`                                                                                            | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | Whether the connection is enabled.                                                                   |
| `webhookUrl`                                                                                         | *string*                                                                                             | :heavy_minus_sign:                                                                                   | The webhook URL, present when connection_type is WEBHOOK.                                            |
| `credentials`                                                                                        | [components.WebhookCredentials](../../models/components/webhookcredentials.md)                       | :heavy_minus_sign:                                                                                   | Authentication credentials for a webhook connection.                                                 |