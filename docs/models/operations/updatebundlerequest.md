# UpdateBundleRequest

## Example Usage

```typescript
import { UpdateBundleRequest } from "opal-mcp/models/operations";

let value: UpdateBundleRequest = {
  bundleId: "32acc112-21ff-4669-91c2-21e27683eaa1",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `bundleId`                                                       | *string*                                                         | :heavy_check_mark:                                               | The ID of the bundle to be updated.                              | 32acc112-21ff-4669-91c2-21e27683eaa1                             |
| `bundle`                                                         | [components.BundleInput](../../models/components/bundleinput.md) | :heavy_check_mark:                                               | N/A                                                              |                                                                  |