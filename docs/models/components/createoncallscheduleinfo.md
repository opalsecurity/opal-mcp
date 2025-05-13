# CreateOnCallScheduleInfo

# CreateOnCallScheduleInfo Object
### Description
The `CreateOnCallScheduleInfo` object is used to describe the on call schedule object to be created.

## Example Usage

```typescript
import { CreateOnCallScheduleInfo } from "opal-mcp/models/components";

let value: CreateOnCallScheduleInfo = {
  thirdPartyProvider: "PAGER_DUTY",
  remoteId: "PNZNINN",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `thirdPartyProvider`                                                                           | [components.OnCallScheduleProviderEnum](../../models/components/oncallscheduleproviderenum.md) | :heavy_check_mark:                                                                             | The third party provider of the on call schedule.                                              | PAGER_DUTY                                                                                     |
| `remoteId`                                                                                     | *string*                                                                                       | :heavy_check_mark:                                                                             | The remote ID of the on call schedule                                                          | PNZNINN                                                                                        |