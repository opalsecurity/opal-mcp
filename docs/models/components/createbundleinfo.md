# CreateBundleInfo

# CreateBundleInfo Object
### Description
The `CreateBundleInfo` object is used to store creation info for a bundle.

### Usage Example
Use in the `POST Bundles` endpoint.

## Example Usage

```typescript
import { CreateBundleInfo } from "opal-mcp/models/components";

let value: CreateBundleInfo = {
  name: "Engineering Team Bundle",
  description: "Engineering team bundle.",
  adminOwnerId: "7870617d-e72a-47f5-a84c-693817ab4567",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `name`                               | *string*                             | :heavy_check_mark:                   | The name of the bundle.              | Test Bundle                          |
| `description`                        | *string*                             | :heavy_minus_sign:                   | A brief description of the bundle.   | This is a test bundle                |
| `adminOwnerId`                       | *string*                             | :heavy_check_mark:                   | The ID of the bundle's admin owner.  | 7c86c85d-0651-43e2-a748-d69d658418e8 |