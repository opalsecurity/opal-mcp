# OpalAccessPathEdgeFilter

Constraints on the access path edges themselves.

## Example Usage

```typescript
import { OpalAccessPathEdgeFilter } from "opal-mcp/models/components";

let value: OpalAccessPathEdgeFilter = {
  directOnly: true,
  accessDurationType: "EXPIRING_ONLY",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `directOnly`                                                                   | *boolean*                                                                      | :heavy_minus_sign:                                                             | When true, only return direct (depth-1) principal-to-entitlement edges.        | true                                                                           |
| `accessDurationType`                                                           | [components.AccessDurationType](../../models/components/accessdurationtype.md) | :heavy_minus_sign:                                                             | Constrain results by whether the terminal access expires.                      | EXPIRING_ONLY                                                                  |