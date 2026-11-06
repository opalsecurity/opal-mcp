# RuleConjunction

## Example Usage

```typescript
import { RuleConjunction } from "opal-mcp/models/components";

let value: RuleConjunction = {
  clauses: [],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `clauses`                                                                  | [components.RuleDisjunction](../../models/components/ruledisjunction.md)[] | :heavy_check_mark:                                                         | Empty only when the access rule has `uses_opal_query` set.                 |