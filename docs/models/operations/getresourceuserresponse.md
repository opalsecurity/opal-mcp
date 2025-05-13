# GetResourceUserResponse

List of ResourceUser records for the user's access to the resource.

## Example Usage

```typescript
import { GetResourceUserResponse } from "opal-mcp/models/operations";

let value: GetResourceUserResponse = {
  data: [
    {
      resourceId: "1b978423-db0a-4037-a4cf-f79c60cb67b3",
      userId: "29827fb8-f2dd-4e80-9576-28e31e9934ac",
      accessLevel: {
        accessLevelName: "AdminRole",
        accessLevelRemoteId:
          "arn:aws:iam::590304332660:role/AdministratorAccess",
      },
      fullName: "Jake Barnes",
      email: "jake@company.dev",
      expirationDate: new Date("2022-01-23T04:56:07Z"),
    },
  ],
  cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
  totalCount: 120,
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `data`                                                               | [components.ResourceUser](../../models/components/resourceuser.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |                                                                      |
| `cursor`                                                             | *string*                                                             | :heavy_minus_sign:                                                   | Pagination cursor for the next page of results                       | cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw             |
| `totalCount`                                                         | *number*                                                             | :heavy_minus_sign:                                                   | Total number of results                                              | 120                                                                  |