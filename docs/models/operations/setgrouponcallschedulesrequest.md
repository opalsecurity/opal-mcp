# SetGroupOnCallSchedulesRequest

## Example Usage

```typescript
import { SetGroupOnCallSchedulesRequest } from "opal-mcp/models/operations";

let value: SetGroupOnCallSchedulesRequest = {
  groupId: "4baf8423-db0a-4037-a4cf-f79c60cb67a5",
  onCallScheduleIDList: {
    onCallScheduleIds: [
      "9546209c-42c2-4801-96d7-9ec42df0f59c",
      "bb0197c0-5ea5-45d9-b3b7-b6c439be6435",
    ],
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    | Example                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `groupId`                                                                                                      | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The ID of the group.                                                                                           | 4baf8423-db0a-4037-a4cf-f79c60cb67a5                                                                           |
| `onCallScheduleIDList`                                                                                         | [components.OnCallScheduleIDList](../../models/components/oncallscheduleidlist.md)                             | :heavy_check_mark:                                                                                             | N/A                                                                                                            | {<br/>"on_call_schedule_ids": [<br/>"9546209c-42c2-4801-96d7-9ec42df0f59c",<br/>"bb0197c0-5ea5-45d9-b3b7-b6c439be6435"<br/>]<br/>} |