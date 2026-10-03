# UpdateRequestTemplateInfo

Information for updating a request template. Omitted properties are left unchanged, but `custom_fields` replaces the template's fields wholesale when provided.

## Example Usage

```typescript
import { UpdateRequestTemplateInfo } from "opal-mcp/models/components";

let value: UpdateRequestTemplateInfo = {
  requestTemplateId: "7c86c85d-0651-43e2-a748-d69d658418e8",
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
| `requestTemplateId`                                                                                        | *string*                                                                                                   | :heavy_check_mark:                                                                                         | The ID of the request template to update.                                                                  | 7c86c85d-0651-43e2-a748-d69d658418e8                                                                       |
| `name`                                                                                                     | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | The new name of the request template.                                                                      |                                                                                                            |
| `customFields`                                                                                             | [components.RequestTemplateCustomFieldInput](../../models/components/requesttemplatecustomfieldinput.md)[] | :heavy_minus_sign:                                                                                         | The complete set of fields for the template. Any field not included is removed.                            |                                                                                                            |