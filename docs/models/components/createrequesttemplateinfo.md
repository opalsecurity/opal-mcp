# CreateRequestTemplateInfo

Information for creating a request template.

## Example Usage

```typescript
import { CreateRequestTemplateInfo } from "opal-mcp/models/components";

let value: CreateRequestTemplateInfo = {
  name: "Production access questions",
  customFields: [
    {
      name: "Why do you need this access?",
      type: "MULTI_SELECT",
      required: true,
      metadata: {
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
      },
    },
  ],
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                | Example                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                     | *string*                                                                                                   | :heavy_check_mark:                                                                                         | The name of the request template.                                                                          | Production access questions                                                                                |
| `customFields`                                                                                             | [components.RequestTemplateCustomFieldInput](../../models/components/requesttemplatecustomfieldinput.md)[] | :heavy_minus_sign:                                                                                         | The fields to put on the template, in the order they are shown.                                            |                                                                                                            |