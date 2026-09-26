# OpalAccessPathDetail

A single access path within an ACCESS result.

## Example Usage

```typescript
import { OpalAccessPathDetail } from "opal-mcp/models/components";

let value: OpalAccessPathDetail = {
  path: [
    "252647a3-867e-4d7c-a1ea-df698ca5c6e6",
  ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `path`                                                                                        | *string*[]                                                                                    | :heavy_check_mark:                                                                            | Entity IDs along the path from principal to entitlement.                                      |
| `expiration`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | This path's expiration, if any.                                                               |