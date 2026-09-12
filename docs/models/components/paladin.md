# Paladin

# Paladin Object
### Description
The `Paladin` object represents a Paladin, Opal's AI access-request
reviewer.

## Example Usage

```typescript
import { Paladin } from "opal-mcp/models/components";

let value: Paladin = {
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
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     | Example                                                                                                         |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `paladinId`                                                                                                     | *string*                                                                                                        | :heavy_check_mark:                                                                                              | The ID of the Paladin. Use this value as a reviewer in a request configuration's service_user_ids.              | 32acc112-21ff-4669-91c2-21e27683eaa1                                                                            |
| `name`                                                                                                          | *string*                                                                                                        | :heavy_check_mark:                                                                                              | The name of the Paladin.                                                                                        | paladin-agent-1                                                                                                 |
| `ownerId`                                                                                                       | *string*                                                                                                        | :heavy_check_mark:                                                                                              | The ID of the owner of the Paladin.                                                                             | 7c86c85d-0651-43e2-a748-d69d658418e8                                                                            |
| `monitorMode`                                                                                                   | *boolean*                                                                                                       | :heavy_check_mark:                                                                                              | When true, the Paladin reasons about requests but takes no action. Shown as "Monitor mode" in the UI.           |                                                                                                                 |
| `adminViewOnly`                                                                                                 | *boolean*                                                                                                       | :heavy_check_mark:                                                                                              | When true, the Paladin's recommendations are visible only to admins. Only meaningful when monitor_mode is true. |                                                                                                                 |
| `enabledConnectors`                                                                                             | [components.PaladinConnector](../../models/components/paladinconnector.md)[]                                    | :heavy_check_mark:                                                                                              | The connectors the Paladin is allowed to use.                                                                   |                                                                                                                 |
| `instructions`                                                                                                  | *string*                                                                                                        | :heavy_check_mark:                                                                                              | The free-form instructions that guide the Paladin's decisions.                                                  | Approve read-only access; escalate anything that grants write access.                                           |