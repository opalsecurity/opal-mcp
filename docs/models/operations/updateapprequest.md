# UpdateAppRequest

## Example Usage

```typescript
import { UpdateAppRequest } from "opal-mcp/models/operations";

let value: UpdateAppRequest = {
  appId: "32acc112-21ff-4669-91c2-21e27683eaa1",
  updateAppInfo: {
    visibility: "GLOBAL",
    importVisibility: "GLOBAL",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `appId`                                                              | *string*                                                             | :heavy_check_mark:                                                   | The ID of the app.                                                   | 32acc112-21ff-4669-91c2-21e27683eaa1                                 |
| `updateAppInfo`                                                      | [components.UpdateAppInfo](../../models/components/updateappinfo.md) | :heavy_check_mark:                                                   | N/A                                                                  |                                                                      |