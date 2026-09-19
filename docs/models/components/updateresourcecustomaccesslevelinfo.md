# UpdateResourceCustomAccessLevelInfo

Info for updating a custom access level.

## Example Usage

```typescript
import { UpdateResourceCustomAccessLevelInfo } from "opal-mcp/models/components";

let value: UpdateResourceCustomAccessLevelInfo = {};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `accessLevelName`                         | *string*                                  | :heavy_minus_sign:                        | The new human-readable name.              |
| `policy`                                  | *string*                                  | :heavy_minus_sign:                        | The new policy document.                  |
| `requestableByDefault`                    | *boolean*                                 | :heavy_minus_sign:                        | Whether the role is requestable.          |
| `stackableSensitivityIndex`               | *number*                                  | :heavy_minus_sign:                        | The new sensitivity index.                |
| `clearStackableSensitivityIndex`          | *boolean*                                 | :heavy_minus_sign:                        | Set to true to remove from the hierarchy. |