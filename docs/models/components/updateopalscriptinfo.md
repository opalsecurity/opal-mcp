# UpdateOpalScriptInfo

Information for updating an OpalScript. Omitted fields are left unchanged.

## Example Usage

```typescript
import { UpdateOpalScriptInfo } from "opal-mcp/models/components";

let value: UpdateOpalScriptInfo = {
  name: "MFA check",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                | Example                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                     | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | The name of the OpalScript.                                                                                | MFA check                                                                                                  |
| `script`                                                                                                   | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | The source of the OpalScript. A new version is recorded only when the source differs from the current one. |                                                                                                            |