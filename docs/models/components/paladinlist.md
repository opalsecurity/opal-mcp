# PaladinList

# PaladinList Object
### Description
A list of `Paladin` objects.

## Example Usage

```typescript
import { PaladinList } from "opal-mcp/models/components";

let value: PaladinList = {
  results: [
    {
      paladinId: "32acc112-21ff-4669-91c2-21e27683eaa1",
      name: "paladin-agent-1",
      ownerId: "7c86c85d-0651-43e2-a748-d69d658418e8",
      monitorMode: true,
      adminViewOnly: false,
      enabledConnectors: [
        "SLACK",
      ],
      instructions:
        "Approve read-only access; escalate anything that grants write access.",
    },
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `results`                                                  | [components.Paladin](../../models/components/paladin.md)[] | :heavy_check_mark:                                         | N/A                                                        |