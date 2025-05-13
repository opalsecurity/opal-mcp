# MessageChannelList

## Example Usage

```typescript
import { MessageChannelList } from "opal-mcp/models/components";

let value: MessageChannelList = {
  channels: [
    {
      messageChannelId: "7870617d-e72a-47f5-a84c-693817ab4567",
      thirdPartyProvider: "SLACK",
      remoteId: "C03FJR97276",
      name: "api-team-audit-channel",
      isPrivate: false,
    },
    {
      messageChannelId: "1520617d-e72a-47f5-a84c-693817ab48ad2",
      thirdPartyProvider: "SLACK",
      remoteId: "A4FJR97365D",
      name: "api-team-monitor-channel",
      isPrivate: false,
    },
  ],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `channels`                                                               | [components.MessageChannel](../../models/components/messagechannel.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |