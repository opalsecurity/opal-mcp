# UpdateEventStreamRequest

## Example Usage

```typescript
import { UpdateEventStreamRequest } from "opal-mcp/models/operations";

let value: UpdateEventStreamRequest = {
  eventStreamId: "4baf8423-db0a-4037-a4cf-f79c60cb67a5",
  updateEventStreamInfo: {},
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `eventStreamId`                                                                      | *string*                                                                             | :heavy_check_mark:                                                                   | The ID of the event stream.                                                          | 4baf8423-db0a-4037-a4cf-f79c60cb67a5                                                 |
| `updateEventStreamInfo`                                                              | [components.UpdateEventStreamInfo](../../models/components/updateeventstreaminfo.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |                                                                                      |