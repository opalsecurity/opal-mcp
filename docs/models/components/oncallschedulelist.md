# OnCallScheduleList

## Example Usage

```typescript
import { OnCallScheduleList } from "opal-mcp/models/components";

let value: OnCallScheduleList = {
  onCallSchedules: [
    {
      onCallScheduleId: "50d5e9f6-f23f-4d5a-ae91-b2640cf3975e",
      thirdPartyProvider: "PAGER_DUTY",
      remoteId: "P7OWH2R",
      name: "Customer Support On-Call",
    },
    {
      onCallScheduleId: "4d61592c-ed61-4b13-8f22-2fac1c49f574",
      thirdPartyProvider: "OPSGENIE",
      remoteId: "72a8cb04-9e25-465d-a932-992f72077c61",
      name: "Opal Backend On-Call",
    },
  ],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `onCallSchedules`                                                        | [components.OnCallSchedule](../../models/components/oncallschedule.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |