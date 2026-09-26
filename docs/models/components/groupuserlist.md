# GroupUserList

## Example Usage

```typescript
import { GroupUserList } from "opal-mcp/models/components";

let value: GroupUserList = {
  results: [
    {
      groupId: "1b978423-db0a-4037-a4cf-f79c60cb67b3",
      groupName: "API Group",
      description: "Group required to request API's",
      userId: "29827fb8-f2dd-4e80-9576-28e31e9934ac",
      fullName: "Jake Barnes",
      email: "jake@company.dev",
      expirationDate: new Date("2022-01-23T04:56:07Z"),
    },
    {
      groupId: "1b978423-db0a-4037-a4cf-f79c60cb67b3",
      groupName: "API Group",
      description: "Group required to request API's",
      userId: "7646aa9a-e2ee-4eb5-8c62-91f29038a373",
      fullName: "Brett Ashley",
      email: "brett@company.dev",
      expirationDate: new Date("2022-02-03T12:33:02Z"),
    },
  ],
  next: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
  previous: "cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `results`                                                                      | [components.GroupUser](../../models/components/groupuser.md)[]                 | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `next`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | The cursor with which to continue pagination if additional result pages exist. | cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw                       |
| `previous`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | The cursor used to obtain the current result page.                             | cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ                       |