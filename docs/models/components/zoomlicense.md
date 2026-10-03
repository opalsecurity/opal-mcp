# ZoomLicense

Remote info for Zoom license (user type).

## Example Usage

```typescript
import { ZoomLicense } from "opal-mcp/models/components";

let value: ZoomLicense = {
  licenseType: "2",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `licenseType`                                                        | *string*                                                             | :heavy_check_mark:                                                   | The Zoom user type representing the license (e.g. "2" for Licensed). | 2                                                                    |