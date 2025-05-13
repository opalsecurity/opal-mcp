# RuleConjunction

## Example Usage

```typescript
import { RuleConjunction } from "opal-mcp/models/components";

let value: RuleConjunction = {
  clauses: [
    {
      selectors: [
        {
          key: "<key>",
          value: "<value>",
          connectionId: "4527e3fc-19ad-4c10-a6b0-112658913af1",
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `clauses`                                                                  | [components.RuleDisjunction](../../models/components/ruledisjunction.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |