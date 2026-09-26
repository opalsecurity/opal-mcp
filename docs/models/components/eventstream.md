# EventStream

An event streaming connection that publishes events to an external system.

## Example Usage

```typescript
import { EventStream } from "opal-mcp/models/components";

let value: EventStream = {
  eventStreamId: "d07a6c09-a381-4abd-b5d6-5ec0df150a5a",
  connection: {
    name: "<value>",
    connectionType: "WEBHOOK",
    enabled: false,
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `eventStreamId`                                                                      | *string*                                                                             | :heavy_check_mark:                                                                   | The ID of the event stream.                                                          |
| `connection`                                                                         | [components.EventStreamConnection](../../models/components/eventstreamconnection.md) | :heavy_check_mark:                                                                   | The connection configuration for an event stream.                                    |