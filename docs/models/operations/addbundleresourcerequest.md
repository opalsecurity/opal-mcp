# AddBundleResourceRequest

## Example Usage

```typescript
import { AddBundleResourceRequest } from "opal-mcp/models/operations";

let value: AddBundleResourceRequest = {
  bundleId: "32acc112-21ff-4669-91c2-21e27683eaa1",
  requestBody: {
    resourceId: "72e75a6f-7183-48c5-94ff-6013f213314b",
    accessLevelRemoteId: "arn:aws:iam::590304332660:role/AdministratorAccess",
    accessLevelName: "AdministratorAccess",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `bundleId`                                                                                         | *string*                                                                                           | :heavy_check_mark:                                                                                 | The ID of the bundle.                                                                              | 32acc112-21ff-4669-91c2-21e27683eaa1                                                               |
| `requestBody`                                                                                      | [operations.AddBundleResourceRequestBody](../../models/operations/addbundleresourcerequestbody.md) | :heavy_minus_sign:                                                                                 | N/A                                                                                                |                                                                                                    |