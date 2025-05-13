# SetBundleVisibilityRequest

## Example Usage

```typescript
import { SetBundleVisibilityRequest } from "opal-mcp/models/operations";

let value: SetBundleVisibilityRequest = {
  bundleId: "32acc112-21ff-4669-91c2-21e27683eaa1",
  visibilityInfo: {
    visibility: "LIMITED",
    visibilityGroupIds: [
      "7870617d-e72a-47f5-a84c-693817ab4567",
      "1520617d-e72a-47f5-a84c-693817ab48ad2",
    ],
  },
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              | Example                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `bundleId`                                                                                                                               | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | The ID of the bundle.                                                                                                                    | 32acc112-21ff-4669-91c2-21e27683eaa1                                                                                                     |
| `visibilityInfo`                                                                                                                         | [components.VisibilityInfo](../../models/components/visibilityinfo.md)                                                                   | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      | {<br/>"visibility": "LIMITED",<br/>"visibility_group_ids": [<br/>"7870617d-e72a-47f5-a84c-693817ab4567",<br/>"1520617d-e72a-47f5-a84c-693817ab48ad2"<br/>]<br/>} |