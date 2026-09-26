# EntityDescriptionFilter

Filters GROUP and RESOURCE entities by a case-insensitive substring of their description ("contains"). USER entities have no description and never match, in either polarity. `not` inverts the match within the resource/group domain ("does NOT contain"), so it still returns only resources/groups rather than sweeping in users.


## Example Usage

```typescript
import { EntityDescriptionFilter } from "opal-mcp/models/components";

let value: EntityDescriptionFilter = {
  string: "production",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `string`                                                                                     | *string*                                                                                     | :heavy_check_mark:                                                                           | The substring to match against the entity description.                                       | production                                                                                   |
| `not`                                                                                        | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | Invert the match — return resources/groups whose description does NOT contain the substring. |                                                                                              |