# EntityTagFilter

Filters entities by a tag key/value pair, optionally scoped to a connection.

## Example Usage

```typescript
import { EntityTagFilter } from "opal-mcp/models/components";

let value: EntityTagFilter = {
  key: "team",
  value: "platform",
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             | Example                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `key`                                                                                                                   | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | The tag key to filter by.                                                                                               | team                                                                                                                    |
| `value`                                                                                                                 | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | The tag value to filter by. If omitted, matches only tags with no value; use entityTagKey to match any value for a key. | platform                                                                                                                |
| `connectionId`                                                                                                          | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | If specified, filters by tags associated with this connection.                                                          |                                                                                                                         |