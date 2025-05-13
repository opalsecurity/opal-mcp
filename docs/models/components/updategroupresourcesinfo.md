# UpdateGroupResourcesInfo

## Example Usage

```typescript
import { UpdateGroupResourcesInfo } from "opal-mcp/models/components";

let value: UpdateGroupResourcesInfo = {
  resources: [
    {
      resourceId: "b5a5ca27-0ea3-4d86-9199-2126d57d1fbd",
      accessLevelRemoteId: "write",
    },
  ],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `resources`                                                                                | [components.ResourceWithAccessLevel](../../models/components/resourcewithaccesslevel.md)[] | :heavy_check_mark:                                                                         | N/A                                                                                        |