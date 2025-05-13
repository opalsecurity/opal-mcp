# OnCallSchedule

# OnCallSchedule Object
### Description
The `OnCallSchedule` object is used to represent an on call schedule.

### Usage Example
Update a groups on call schedule from the `UPDATE Groups` endpoint.

## Example Usage

```typescript
import { OnCallSchedule } from "opal-mcp/models/components";

let value: OnCallSchedule = {
  onCallScheduleId: "50d5e9f6-f23f-4d5a-ae91-b2640cf3975e",
  thirdPartyProvider: "PAGER_DUTY",
  remoteId: "P7OWH2R",
  name: "Customer Support On-Call",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `onCallScheduleId`                                                                             | *string*                                                                                       | :heavy_minus_sign:                                                                             | The ID of the on-call schedule.                                                                | 50d5e9f6-f23f-4d5a-ae91-b2640cf3975e                                                           |
| `thirdPartyProvider`                                                                           | [components.OnCallScheduleProviderEnum](../../models/components/oncallscheduleproviderenum.md) | :heavy_minus_sign:                                                                             | The third party provider of the on call schedule.                                              | PAGER_DUTY                                                                                     |
| `remoteId`                                                                                     | *string*                                                                                       | :heavy_minus_sign:                                                                             | The remote ID of the on call schedule                                                          | P7OWH2R                                                                                        |
| `name`                                                                                         | *string*                                                                                       | :heavy_minus_sign:                                                                             | The name of the on call schedule.                                                              | Customer Support On-Call                                                                       |