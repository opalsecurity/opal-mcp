# SetAppVisibilityRequest

## Example Usage

```typescript
import { SetAppVisibilityRequest } from "opal-mcp/models/operations";

let value: SetAppVisibilityRequest = {
  appId: "32acc112-21ff-4669-91c2-21e27683eaa1",
  appVisibilityInfo: {
    visibility: "LIMITED",
    visibilityGroupIds: [
      "7870617d-e72a-47f5-a84c-693817ab4567",
      "1520617d-e72a-47f5-a84c-693817ab48ad",
    ],
    importVisibility: "LIMITED",
  },
};
```

## Fields

| Field                                                                                                                                                                   | Type                                                                                                                                                                    | Required                                                                                                                                                                | Description                                                                                                                                                             | Example                                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `appId`                                                                                                                                                                 | *string*                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                      | The ID of the app.                                                                                                                                                      | 32acc112-21ff-4669-91c2-21e27683eaa1                                                                                                                                    |
| `appVisibilityInfo`                                                                                                                                                     | [components.AppVisibilityInfo](../../models/components/appvisibilityinfo.md)                                                                                            | :heavy_check_mark:                                                                                                                                                      | N/A                                                                                                                                                                     | {<br/>"visibility": "LIMITED",<br/>"visibility_group_ids": [<br/>"7870617d-e72a-47f5-a84c-693817ab4567",<br/>"1520617d-e72a-47f5-a84c-693817ab48ad"<br/>],<br/>"import_visibility": "LIMITED"<br/>} |