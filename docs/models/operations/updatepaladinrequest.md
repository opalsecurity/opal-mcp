# UpdatePaladinRequest

## Example Usage

```typescript
import { UpdatePaladinRequest } from "opal-mcp/models/operations";

let value: UpdatePaladinRequest = {
  paladinId: "32acc112-21ff-4669-91c2-21e27683eaa1",
  updatePaladinInfo: {
    name: "paladin-agent-1",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `paladinId`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | The ID of the Paladin.                                                       | 32acc112-21ff-4669-91c2-21e27683eaa1                                         |
| `updatePaladinInfo`                                                          | [components.UpdatePaladinInfo](../../models/components/updatepaladininfo.md) | :heavy_check_mark:                                                           | N/A                                                                          | {<br/>"name": "paladin-agent-1"<br/>}                                        |