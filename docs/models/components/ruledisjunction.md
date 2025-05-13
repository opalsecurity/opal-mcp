# RuleDisjunction

## Example Usage

```typescript
import { RuleDisjunction } from "opal-mcp/models/components";

let value: RuleDisjunction = {
  selectors: [
    {
      key: "<key>",
      value: "<value>",
      connectionId: "c145a004-7806-4fe7-bb37-9277359f1433",
    },
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `selectors`                                                        | [components.TagSelector](../../models/components/tagselector.md)[] | :heavy_check_mark:                                                 | N/A                                                                |