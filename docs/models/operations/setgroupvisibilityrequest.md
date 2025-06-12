# SetGroupVisibilityRequest

## Example Usage

```typescript
import { SetGroupVisibilityRequest } from "opal-mcp/models/operations";

let value: SetGroupVisibilityRequest = {
  groupId: "4baf8423-db0a-4037-a4cf-f79c60cb67a5",
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              | Example                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `groupId`                                                                                                                                | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | The ID of the group.                                                                                                                     | 4baf8423-db0a-4037-a4cf-f79c60cb67a5                                                                                                     |
| `visibilityInfo`                                                                                                                         | [components.VisibilityInfo](../../models/components/visibilityinfo.md)                                                                   | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      | {<br/>"visibility": "LIMITED",<br/>"visibility_group_ids": [<br/>"7870617d-e72a-47f5-a84c-693817ab4567",<br/>"1520617d-e72a-47f5-a84c-693817ab48ad2"<br/>]<br/>} |