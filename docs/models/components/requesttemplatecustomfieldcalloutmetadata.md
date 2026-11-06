# RequestTemplateCustomFieldCalloutMetadata

The message shown to a requester by a `CALLOUT` field, and how prominently to show it.

## Example Usage

```typescript
import { RequestTemplateCustomFieldCalloutMetadata } from "opal-mcp/models/components";

let value: RequestTemplateCustomFieldCalloutMetadata = {
  severity: "WARNING",
  text: "This role grants access to production customer data.",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `severity`                                                 | [components.Severity](../../models/components/severity.md) | :heavy_check_mark:                                         | How prominently the message is shown.                      | WARNING                                                    |
| `text`                                                     | *string*                                                   | :heavy_check_mark:                                         | The message shown to the requester.                        | This role grants access to production customer data.       |