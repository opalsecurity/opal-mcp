# AccessList

## Example Usage

```typescript
import { AccessList } from "opal-mcp/models/components";

let value: AccessList = {
  results: [
    {
      principalId: "74908af0-9383-4feb-b7ea-8b305d737338",
      principalType: "RESOURCE",
      entityId: "db04925a-635d-4764-870e-500b9b035c8e",
      entityType: "RESOURCE",
      expirationDate: new Date("2022-01-23T04:56:07Z"),
      hasDirectAccess: true,
      numAccessPaths: 3,
    },
    {
      principalId: "d940df34-726a-4403-864e-16cb2a0d6793",
      principalType: "RESOURCE",
      entityId: "c26cd16c-a3fa-4b82-96b1-32177f8b8f59",
      entityType: "RESOURCE",
      expirationDate: new Date("2022-01-23T04:56:07Z"),
      hasDirectAccess: true,
      numAccessPaths: 3,
    },
  ],
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `results`                                                | [components.Access](../../models/components/access.md)[] | :heavy_minus_sign:                                       | N/A                                                      |