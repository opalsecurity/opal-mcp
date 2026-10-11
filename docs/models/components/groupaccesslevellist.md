# GroupAccessLevelList

A list of access levels defined for a group.

## Example Usage

```typescript
import { GroupAccessLevelList } from "opal-mcp/models/components";

let value: GroupAccessLevelList = {
  results: [
    {
      accessLevelName: "Developer",
      accessLevelRemoteId: "30",
    },
    {
      accessLevelName: "Maintainer",
      accessLevelRemoteId: "40",
    },
  ],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `results`                                                                    | [components.GroupAccessLevel](../../models/components/groupaccesslevel.md)[] | :heavy_minus_sign:                                                           | N/A                                                                          |