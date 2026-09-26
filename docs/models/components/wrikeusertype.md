# WrikeUserType

Remote info for Wrike user type (license type).

## Example Usage

```typescript
import { WrikeUserType } from "opal-mcp/models/components";

let value: WrikeUserType = {
  userTypeId: "KX7ZHLVGABCDEFGH",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `userTypeId`                                               | *string*                                                   | :heavy_check_mark:                                         | The Wrike user type ID (16-char UID from GET /user_types). | KX7ZHLVGABCDEFGH                                           |