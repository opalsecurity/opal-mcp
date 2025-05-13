# TagFilter

A tag filter defined by the tags key and value.

## Example Usage

```typescript
import { TagFilter } from "opal-mcp/models/components";

let value: TagFilter = {
  key: "uar_scope",
  value: "high_priority",
};
```

## Fields

| Field                 | Type                  | Required              | Description           | Example               |
| --------------------- | --------------------- | --------------------- | --------------------- | --------------------- |
| `key`                 | *string*              | :heavy_check_mark:    | The key of the tag.   | uar_scope             |
| `value`               | *string*              | :heavy_minus_sign:    | The value of the tag. | high_priority         |