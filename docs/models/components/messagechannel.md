# MessageChannel

# MessageChannel Object
### Description
The `MessageChannel` object is used to represent a message channel.

### Usage Example
Update a groups message channel from the `UPDATE Groups` endpoint.

## Example Usage

```typescript
import { MessageChannel } from "opal-mcp/models/components";

let value: MessageChannel = {
  messageChannelId: "6670617d-e72a-47f5-a84c-693817ab4860",
  thirdPartyProvider: "SLACK",
  remoteId: "C03FJR97276",
  name: "api-team-audit-channel",
  isPrivate: false,
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `messageChannelId`                                                                             | *string*                                                                                       | :heavy_check_mark:                                                                             | The ID of the message channel.                                                                 | 6670617d-e72a-47f5-a84c-693817ab4860                                                           |
| `thirdPartyProvider`                                                                           | [components.MessageChannelProviderEnum](../../models/components/messagechannelproviderenum.md) | :heavy_minus_sign:                                                                             | The third party provider of the message channel.                                               | SLACK                                                                                          |
| `remoteId`                                                                                     | *string*                                                                                       | :heavy_minus_sign:                                                                             | The remote ID of the message channel                                                           | C03FJR97276                                                                                    |
| `name`                                                                                         | *string*                                                                                       | :heavy_minus_sign:                                                                             | The name of the message channel.                                                               | api-team-audit-channel                                                                         |
| `isPrivate`                                                                                    | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | A bool representing whether or not the message channel is private.                             | false                                                                                          |