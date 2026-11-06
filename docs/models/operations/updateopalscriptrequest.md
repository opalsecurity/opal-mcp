# UpdateOpalScriptRequest

## Example Usage

```typescript
import { UpdateOpalScriptRequest } from "opal-mcp/models/operations";

let value: UpdateOpalScriptRequest = {
  opalScriptId: "32acc112-21ff-4669-91c2-21e27683eaa1",
  updateOpalScriptInfo: {
    name: "MFA check",
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `opalScriptId`                                                                     | *string*                                                                           | :heavy_check_mark:                                                                 | The ID of the OpalScript.                                                          | 32acc112-21ff-4669-91c2-21e27683eaa1                                               |
| `updateOpalScriptInfo`                                                             | [components.UpdateOpalScriptInfo](../../models/components/updateopalscriptinfo.md) | :heavy_check_mark:                                                                 | N/A                                                                                | {<br/>"name": "MFA check"<br/>}                                                    |