# OnCallScheduleIDList

A list of on call schedule Opal UUIDs. To get the matching remote IDs, use the /on-call-schedules endpoints.

## Example Usage

```typescript
import { OnCallScheduleIDList } from "opal-mcp/models/components";

let value: OnCallScheduleIDList = {
  onCallScheduleIds: [
    "9546209c-42c2-4801-96d7-9ec42df0f59c",
    "bb0197c0-5ea5-45d9-b3b7-b6c439be6435",
  ],
};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `onCallScheduleIds` | *string*[]          | :heavy_check_mark:  | N/A                 |