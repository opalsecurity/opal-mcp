# ResourceWithAccessLevel

Information about a resource and corresponding access level

## Example Usage

```typescript
import { ResourceWithAccessLevel } from "opal-mcp/models/components";

let value: ResourceWithAccessLevel = {
  resourceId: "b5a5ca27-0ea3-4d86-9199-2126d57d1fbd",
  accessLevelRemoteId: "write",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `resourceId`                         | *string*                             | :heavy_check_mark:                   | The ID of the resource.              | b5a5ca27-0ea3-4d86-9199-2126d57d1fbd |
| `accessLevelRemoteId`                | *string*                             | :heavy_minus_sign:                   | The ID of the resource.              | write                                |