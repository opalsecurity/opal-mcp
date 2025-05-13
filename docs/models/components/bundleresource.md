# BundleResource

## Example Usage

```typescript
import { BundleResource } from "opal-mcp/models/components";

let value: BundleResource = {
  bundleId: "a381e7a3-e5e0-4c48-b1d6-4ccb4c191bc1",
  resourceId: "a381e7a3-e5e0-4c48-b1d6-4ccb4c191bc1",
  accessLevelName: "Read",
  accessLevelRemoteId: "arn:aws:iam::490306337630:role/SupportUser",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `bundleId`                                                         | *string*                                                           | :heavy_minus_sign:                                                 | The ID of the bundle containing the resource.                      | a381e7a3-e5e0-4c48-b1d6-4ccb4c191bc1                               |
| `resourceId`                                                       | *string*                                                           | :heavy_minus_sign:                                                 | The ID of the resource within a bundle.                            | a381e7a3-e5e0-4c48-b1d6-4ccb4c191bc1                               |
| `accessLevelName`                                                  | *string*                                                           | :heavy_minus_sign:                                                 | The access level of the resource within a bundle.                  | Read                                                               |
| `accessLevelRemoteId`                                              | *string*                                                           | :heavy_minus_sign:                                                 | The remote ID of the access level of the resource within a bundle. | arn:aws:iam::490306337630:role/SupportUser                         |