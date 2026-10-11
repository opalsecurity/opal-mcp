# OpalScriptList

# OpalScriptList Object
### Description
A list of `OpalScript` objects.

## Example Usage

```typescript
import { OpalScriptList } from "opal-mcp/models/components";

let value: OpalScriptList = {
  results: [
    {
      opalScriptId: "32acc112-21ff-4669-91c2-21e27683eaa1",
      name: "MFA check",
      scriptType: "REQUEST_REVIEW",
      script: "<value>",
      version: 3,
    },
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `results`                                                        | [components.OpalScript](../../models/components/opalscript.md)[] | :heavy_check_mark:                                               | N/A                                                              |