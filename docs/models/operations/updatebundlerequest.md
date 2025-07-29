# UpdateBundleRequest

## Example Usage

```typescript
import { UpdateBundleRequest } from "opal-mcp/models/operations";

let value: UpdateBundleRequest = {
  bundleId: "32acc112-21ff-4669-91c2-21e27683eaa1",
  bundle: {
    name: "Bundle 1",
    description: "Description of bundle 1",
    adminOwnerId: "4aed3e8a-727b-4d72-8010-3b8710c50bec",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `bundleId`                                                       | *string*                                                         | :heavy_check_mark:                                               | The ID of the bundle to be updated.                              | 32acc112-21ff-4669-91c2-21e27683eaa1                             |
| `bundle`                                                         | [components.BundleInput](../../models/components/bundleinput.md) | :heavy_check_mark:                                               | N/A                                                              |                                                                  |