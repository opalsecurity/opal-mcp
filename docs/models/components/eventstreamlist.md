# EventStreamList

A list of event streams.

## Example Usage

```typescript
import { EventStreamList } from "opal-mcp/models/components";

let value: EventStreamList = {
  eventStreams: [
    {
      eventStreamId: "c0b5c1d3-fab4-4571-a628-ad4624482bbb",
      connection: {
        name: "<value>",
        connectionType: "WEBHOOK",
        enabled: false,
      },
    },
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `eventStreams`                                                     | [components.EventStream](../../models/components/eventstream.md)[] | :heavy_check_mark:                                                 | N/A                                                                |