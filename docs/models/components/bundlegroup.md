# BundleGroup

## Example Usage

```typescript
import { BundleGroup } from "opal-mcp/models/components";

let value: BundleGroup = {
  bundleId: "a381e7a3-e5e0-4c48-b1d6-4ccb4c191bc1",
  groupId: "a381e7a3-e5e0-4c48-b1d6-4ccb4c191bc1",
  accessLevelName: "Read",
  accessLevelRemoteId: "arn:aws:iam::490306337630:role/SupportUser",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     | Example                                                         |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `bundleId`                                                      | *string*                                                        | :heavy_minus_sign:                                              | The ID of the bundle containing the group.                      | a381e7a3-e5e0-4c48-b1d6-4ccb4c191bc1                            |
| `groupId`                                                       | *string*                                                        | :heavy_minus_sign:                                              | The ID of the group within a bundle.                            | a381e7a3-e5e0-4c48-b1d6-4ccb4c191bc1                            |
| `accessLevelName`                                               | *string*                                                        | :heavy_minus_sign:                                              | The access level of the group within a bundle.                  | Read                                                            |
| `accessLevelRemoteId`                                           | *string*                                                        | :heavy_minus_sign:                                              | The remote ID of the access level of the group within a bundle. | arn:aws:iam::490306337630:role/SupportUser                      |