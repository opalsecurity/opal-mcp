# CreateMessageChannelInfo

# CreateMessageChannelInfo Object
### Description
The `CreateMessageChannelInfo` object is used to describe the message channel object to be created.

## Example Usage

```typescript
import { CreateMessageChannelInfo } from "opal-mcp/models/components";

let value: CreateMessageChannelInfo = {
  thirdPartyProvider: "SLACK",
  remoteId: "C03FJR97276",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `thirdPartyProvider`                                                                           | [components.MessageChannelProviderEnum](../../models/components/messagechannelproviderenum.md) | :heavy_check_mark:                                                                             | The third party provider of the message channel.                                               | SLACK                                                                                          |
| `remoteId`                                                                                     | *string*                                                                                       | :heavy_check_mark:                                                                             | The remote ID of the message channel                                                           | C03FJR97276                                                                                    |