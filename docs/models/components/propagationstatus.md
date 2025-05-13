# PropagationStatus

The state of whether the push action was propagated to the remote system. If this is null, the access was synced from the remote system.

## Example Usage

```typescript
import { PropagationStatus } from "opal-mcp/models/components";

let value: PropagationStatus = {
  status: "SUCCESS",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `status`                                                                                      | [components.PropagationStatusEnum](../../models/components/propagationstatusenum.md)          | :heavy_check_mark:                                                                            | The status of whether the user has been synced to the group or resource in the remote system. | [<br/>"SUCCESS"<br/>]                                                                         |