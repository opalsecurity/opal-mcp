# EntityTagKeyFilter

Filters entities that have a tag whose key is one of `keys`, whatever its value (including no value). Keys match exactly and case-sensitively. An empty list matches nothing. AGENT entities carry no tags, so they never match; under `not`, every agent matches, as with entityTag.


## Example Usage

```typescript
import { EntityTagKeyFilter } from "opal-mcp/models/components";

let value: EntityTagKeyFilter = {
  keys: [
    "Critical",
  ],
};
```

## Fields

| Field                  | Type                   | Required               | Description            | Example                |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `keys`                 | *string*[]             | :heavy_check_mark:     | The tag keys to match. | [<br/>"Critical"<br/>] |