# RequestTemplateCustomFieldMetadata

Extra configuration for field types that need it. Exactly one member is set, and which one is determined by the field's `type`.

## Example Usage

```typescript
import { RequestTemplateCustomFieldMetadata } from "opal-mcp/models/components";

let value: RequestTemplateCustomFieldMetadata = {
  calloutData: {
    severity: "WARNING",
    text: "This role grants access to production customer data.",
  },
  multiChoiceData: {
    options: [
      "Incident response",
      "Scheduled maintenance",
    ],
  },
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `calloutData`                                                                                                                        | [components.RequestTemplateCustomFieldCalloutMetadata](../../models/components/requesttemplatecustomfieldcalloutmetadata.md)         | :heavy_minus_sign:                                                                                                                   | The message shown to a requester by a `CALLOUT` field, and how prominently to show it.                                               |
| `multiChoiceData`                                                                                                                    | [components.RequestTemplateCustomFieldMultiChoiceMetadata](../../models/components/requesttemplatecustomfieldmultichoicemetadata.md) | :heavy_minus_sign:                                                                                                                   | The options a requester can pick from in a `MULTI_CHOICE` or `MULTI_SELECT` field.                                                   |