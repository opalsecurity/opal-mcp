# PaginatedRequestTemplateList

## Example Usage

```typescript
import { PaginatedRequestTemplateList } from "opal-mcp/models/components";

let value: PaginatedRequestTemplateList = {
  next: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzAyMTMlMkIwMCUzQTAw",
  previous: "cj0xJnA9MjAyMS0wMS0wNSswMyUzQTI0JTNBNTMuNDMwMjEz",
  results: [
    {
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
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | The cursor with which to continue pagination if additional result pages exist. | cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzAyMTMlMkIwMCUzQTAw                       |
| `previous`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | The cursor used to obtain the current result page.                             | cj0xJnA9MjAyMS0wMS0wNSswMyUzQTI0JTNBNTMuNDMwMjEz                               |
| `results`                                                                      | [components.RequestTemplate](../../models/components/requesttemplate.md)[]     | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |