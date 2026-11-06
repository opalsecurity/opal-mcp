# IdpGroupMapping

Information about a group mapping.

## Example Usage

```typescript
import { IdpGroupMapping } from "opal-mcp/models/components";

let value: IdpGroupMapping = {
  appResourceId: "1520617d-e72a-47f5-a84c-693817ab48ad2",
  groupId: "6f99639b-7928-4043-8184-47cbc6766145",
  alias: "finance-team",
  hiddenFromEndUser: false,
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `appResourceId`                                                           | *string*                                                                  | :heavy_minus_sign:                                                        | The ID of the app resource.                                               | 1520617d-e72a-47f5-a84c-693817ab48ad2                                     |
| `groupId`                                                                 | *string*                                                                  | :heavy_check_mark:                                                        | The ID of the group.                                                      | 6f99639b-7928-4043-8184-47cbc6766145                                      |
| `alias`                                                                   | *string*                                                                  | :heavy_minus_sign:                                                        | The alias of the group.                                                   | finance-team                                                              |
| `hiddenFromEndUser`                                                       | *boolean*                                                                 | :heavy_check_mark:                                                        | A bool representing whether or not the group is hidden from the end user. | false                                                                     |