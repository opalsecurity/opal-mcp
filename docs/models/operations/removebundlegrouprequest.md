# RemoveBundleGroupRequest

## Example Usage

```typescript
import { RemoveBundleGroupRequest } from "opal-mcp/models/operations";

let value: RemoveBundleGroupRequest = {
  bundleId: "32acc112-21ff-4669-91c2-21e27683eaa1",
  groupId: "72e75a6f-7183-48c5-94ff-6013f213314b",
  accessLevelRemoteId: "arn:aws:iam::590304332660:role/AdministratorAccess",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        | Example                                            |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `bundleId`                                         | *string*                                           | :heavy_check_mark:                                 | The ID of the bundle.                              | 32acc112-21ff-4669-91c2-21e27683eaa1               |
| `groupId`                                          | *string*                                           | :heavy_check_mark:                                 | The ID of the group to remove.                     | 72e75a6f-7183-48c5-94ff-6013f213314b               |
| `accessLevelRemoteId`                              | *string*                                           | :heavy_minus_sign:                                 | The remote ID of the access level to remove.       | arn:aws:iam::590304332660:role/AdministratorAccess |