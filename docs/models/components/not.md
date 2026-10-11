# Not

Excludes entities matching the embedded filter (logical NOT). Pass a filter object with the same shape as this one — typically a single scalar field, like `{not: {entityTypes: ["RESOURCE"]}}` to exclude resources.


## Example Usage

```typescript
import { Not } from "opal-mcp/models/components";

let value: Not = {};
```

## Fields

| Field       | Type        | Required    | Description |
| ----------- | ----------- | ----------- | ----------- |