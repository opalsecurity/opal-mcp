# ResourceAccessUserList

## Example Usage

```typescript
import { ResourceAccessUserList } from "opal-mcp/models/components";

let value: ResourceAccessUserList = {
  results: [
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
      hasDirectAccess: true,
      numAccessPaths: 2,
    },
    {
      resourceId: "1b978423-db0a-4037-a4cf-f79c60cb67b3",
      userId: "7646aa9a-e2ee-4eb5-8c62-91f29038a373",
      accessLevel: {
        accessLevelName: "AdminRole",
        accessLevelRemoteId:
          "arn:aws:iam::590304332660:role/AdministratorAccess",
      },
      fullName: "Brett Ashley",
      email: "brett@company.dev",
      expirationDate: new Date("2022-02-03T12:33:02Z"),
      hasDirectAccess: true,
      numAccessPaths: 3,
    },
  ],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `results`                                                                        | [components.ResourceAccessUser](../../models/components/resourceaccessuser.md)[] | :heavy_minus_sign:                                                               | N/A                                                                              |