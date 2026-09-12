# UpdateUserInfo

The user fields to update.

## Example Usage

```typescript
import { UpdateUserInfo } from "opal-mcp/models/components";

let value: UpdateUserInfo = {};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `managerId`                                               | *string*                                                  | :heavy_minus_sign:                                        | The user's manager ID. Set to null to remove the manager. |
| `position`                                                | *string*                                                  | :heavy_minus_sign:                                        | The user's position.                                      |