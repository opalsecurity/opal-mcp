# BundleInput

## Example Usage

```typescript
import { BundleInput } from "opal-mcp/models/components";

let value: BundleInput = {
  name: "Bundle 1",
  description: "Description of bundle 1",
  adminOwnerId: "4aed3e8a-727b-4d72-8010-3b8710c50bec",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `name`                               | *string*                             | :heavy_minus_sign:                   | The name of the bundle.              | Bundle 1                             |
| `description`                        | *string*                             | :heavy_minus_sign:                   | The description of the bundle.       | Description of bundle 1              |
| `adminOwnerId`                       | *string*                             | :heavy_minus_sign:                   | The ID of the owner of the bundle.   | 4aed3e8a-727b-4d72-8010-3b8710c50bec |