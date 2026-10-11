# OpalScript

# OpalScript Object
### Description
The `OpalScript` object represents an OpalScript: a Starlark script that
automates part of Opal's access lifecycle.

## Example Usage

```typescript
import { OpalScript } from "opal-mcp/models/components";

let value: OpalScript = {
  opalScriptId: "32acc112-21ff-4669-91c2-21e27683eaa1",
  name: "MFA check",
  scriptType: "REQUEST_REVIEW",
  script: "<value>",
  version: 3,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `opalScriptId`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the OpalScript.                                                                     | 32acc112-21ff-4669-91c2-21e27683eaa1                                                          |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The name of the OpalScript.                                                                   | MFA check                                                                                     |
| `scriptType`                                                                                  | [components.OpalScriptTypeEnum](../../models/components/opalscripttypeenum.md)                | :heavy_check_mark:                                                                            | The kind of automation an OpalScript performs.                                                | REQUEST_REVIEW                                                                                |
| `script`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | The source of the OpalScript's latest version.                                                |                                                                                               |
| `version`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | The version number of the OpalScript's latest version.                                        | 3                                                                                             |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date the OpalScript was last updated.                                                     |                                                                                               |