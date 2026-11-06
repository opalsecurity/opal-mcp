# AzureVirtualMachine

Remote info for Azure virtual machine.

## Example Usage

```typescript
import { AzureVirtualMachine } from "opal-mcp/models/components";

let value: AzureVirtualMachine = {
  resourceId:
    "/subscriptions/0000/resourceGroups/rg/providers/Microsoft.Compute/virtualMachines/vm01",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `resourceId`                                                                           | *string*                                                                               | :heavy_check_mark:                                                                     | The ARM resource ID of the virtual machine.                                            | /subscriptions/0000/resourceGroups/rg/providers/Microsoft.Compute/virtualMachines/vm01 |