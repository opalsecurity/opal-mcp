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

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `attribute`                                                  | [components.Attribute](../../models/components/attribute.md) | :heavy_check_mark:                                           | N/A                                                          |
| `values`                                                     | *string*[]                                                   | :heavy_check_mark:                                           | N/A                                                          |