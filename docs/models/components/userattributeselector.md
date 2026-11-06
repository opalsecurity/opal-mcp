# UserAttributeSelector

## Example Usage

```typescript
import { UserAttributeSelector } from "opal-mcp/models/components";

let value: UserAttributeSelector = {
  attribute: "HR_IDP_STATUS",
  values: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                                                                                                                                                                                        | Type                                                                                                                                                                                                         | Required                                                                                                                                                                                                     | Description                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `attribute`                                                                                                                                                                                                  | [components.Attribute](../../models/components/attribute.md)                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                           | N/A                                                                                                                                                                                                          |
| `values`                                                                                                                                                                                                     | *string*[]                                                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                           | Values to match; a user matches if their attribute equals any of them. For HR_IDP_STATUS, use HrIdpStatus values, or UNSET for users with no IDP status (shown as "Inactive"). UNSET must be the last value. |