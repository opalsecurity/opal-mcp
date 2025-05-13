# RuleClauses

## Example Usage

```typescript
import { RuleClauses } from "opal-mcp/models/components";

let value: RuleClauses = {
  when: {
    clauses: [
      {
        selectors: [
          {
            key: "<key>",
            value: "<value>",
            connectionId: "671e6af6-8171-4e83-ab9d-831022535f14",
          },
        ],
      },
    ],
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `when`                                                                   | [components.RuleConjunction](../../models/components/ruleconjunction.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `unless`                                                                 | [components.RuleConjunction](../../models/components/ruleconjunction.md) | :heavy_minus_sign:                                                       | N/A                                                                      |