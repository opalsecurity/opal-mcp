# RequestTemplate

A template describing what a requester is asked when requesting access.

## Example Usage

```typescript
import { RequestTemplate } from "opal-mcp/models/components";

let value: RequestTemplate = {
  requestTemplateId: "7c86c85d-0651-43e2-a748-d69d658418e8",
  name: "Production access questions",
  customFields: [
    {
      name: "Why do you need this access?",
      type: "LONG_TEXT",
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

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `requestTemplateId`                                                                              | *string*                                                                                         | :heavy_check_mark:                                                                               | The ID of the request template.                                                                  | 7c86c85d-0651-43e2-a748-d69d658418e8                                                             |
| `name`                                                                                           | *string*                                                                                         | :heavy_check_mark:                                                                               | The name of the request template.                                                                | Production access questions                                                                      |
| `customFields`                                                                                   | [components.RequestTemplateCustomField](../../models/components/requesttemplatecustomfield.md)[] | :heavy_minus_sign:                                                                               | The fields on this template, in the order they are shown.                                        |                                                                                                  |