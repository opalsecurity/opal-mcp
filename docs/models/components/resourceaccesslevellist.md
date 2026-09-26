# ResourceAccessLevelList

A list of access levels defined for a resource.

## Example Usage

```typescript
import { ResourceAccessLevelList } from "opal-mcp/models/components";

let value: ResourceAccessLevelList = {
  results: [
    {
      accessLevelName: "AdminRole",
      accessLevelRemoteId: "arn:aws:iam::590304332660:role/AdministratorAccess",
    },
    {
      accessLevelName: "ReadOnly",
      accessLevelRemoteId: "arn:aws:iam::590304332660:role/ReadOnlyAccess",
    },
  ],
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `results`                                                                          | [components.ResourceAccessLevel](../../models/components/resourceaccesslevel.md)[] | :heavy_minus_sign:                                                                 | N/A                                                                                |