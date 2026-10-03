# EntityNameFilter

Filters entities by name using a string match strategy.

## Example Usage

```typescript
import { EntityNameFilter } from "opal-mcp/models/components";

let value: EntityNameFilter = {
  stringMatchType: "REGEX",
  string: "engineering",
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         | Example                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `stringMatchType`                                                                                                   | [components.StringMatchType](../../models/components/stringmatchtype.md)                                            | :heavy_check_mark:                                                                                                  | How to match a string value against entity names. REGEX matches the value as a case-insensitive regular expression. |                                                                                                                     |
| `string`                                                                                                            | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | The string value to match against the entity name.                                                                  | engineering                                                                                                         |