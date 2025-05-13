# PaginatedTagsList

## Example Usage

```typescript
import { PaginatedTagsList } from "opal-mcp/models/components";

let value: PaginatedTagsList = {
  next: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
  previous: "cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ",
  results: [
    {
      tagId: "f290a738-5f9f-43c2-ad67-fa31ff0eb946",
      createdAt: new Date("2022-01-23T04:56:07Z"),
      updatedAt: new Date("2022-02-23T01:34:07Z"),
      userCreatorId: "d4a7d928-783e-4599-8ec6-088d635a5bcc",
      key: "database-name",
      value: "redis_db",
    },
    {
      tagId: "92f0a738-5f9f-43c2-ad67-fa31ff0eb052",
      createdAt: new Date("2022-03-23T04:56:07Z"),
      updatedAt: new Date("2022-04-23T01:34:07Z"),
      userCreatorId: "a4d7d928-783e-4599-8ec6-088d635af4ac",
      key: "database-type",
      value: "sql",
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | The cursor with which to continue pagination if additional result pages exist. | cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw                       |
| `previous`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | The cursor used to obtain the current result page.                             | cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ                       |
| `results`                                                                      | [components.Tag](../../models/components/tag.md)[]                             | :heavy_check_mark:                                                             | N/A                                                                            |                                                                                |