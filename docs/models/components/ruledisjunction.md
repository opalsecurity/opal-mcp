# RuleDisjunction

## Example Usage

```typescript
import { RuleDisjunction } from "opal-mcp/models/components";

let value: RuleDisjunction = {
  selectors: [
    {
      key: "<key>",
      value: "<value>",
      connectionId: "145a0047-806f-4e7b-8379-277359f1433c",
    },
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `selectors`                                                        | [components.TagSelector](../../models/components/tagselector.md)[] | :heavy_check_mark:                                                 | N/A                                                                |