# RequestTemplateCustomFieldMultiChoiceMetadata

The options a requester can pick from in a `MULTI_CHOICE` or `MULTI_SELECT` field.

## Example Usage

```typescript
import { RequestTemplateCustomFieldMultiChoiceMetadata } from "opal-mcp/models/components";

let value: RequestTemplateCustomFieldMultiChoiceMetadata = {
  options: [
    "Incident response",
    "Scheduled maintenance",
  ],
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      | Example                                          |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `options`                                        | *string*[]                                       | :heavy_check_mark:                               | N/A                                              | [<br/>"Incident response",<br/>"Scheduled maintenance"<br/>] |