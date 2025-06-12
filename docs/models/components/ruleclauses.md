# RuleClauses

## Example Usage

```typescript
import { RuleClauses } from "opal-mcp/models/components";

let value: RuleClauses = {
  when: {
    clauses: [],
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `when`                                                                   | [components.RuleConjunction](../../models/components/ruleconjunction.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `unless`                                                                 | [components.RuleConjunction](../../models/components/ruleconjunction.md) | :heavy_minus_sign:                                                       | N/A                                                                      |