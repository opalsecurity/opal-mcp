# DenyRequestRequest

## Example Usage

```typescript
import { DenyRequestRequest } from "opal-mcp/models/operations";

let value: DenyRequestRequest = {
  id: "4a244a1a-389e-4a44-8b66-0fbe2244d954",
  requestBody: {
    comment: "Denied due to insufficient justification",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `id`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | The ID of the request to deny                                                          |
| `requestBody`                                                                          | [operations.DenyRequestRequestBody](../../models/operations/denyrequestrequestbody.md) | :heavy_check_mark:                                                                     | Denial parameters                                                                      |