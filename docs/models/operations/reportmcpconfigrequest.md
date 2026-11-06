# ReportMcpConfigRequest

## Example Usage

```typescript
import { ReportMcpConfigRequest } from "opal-mcp/models/operations";

let value: ReportMcpConfigRequest = {
  mcpConfigReport: {
    servers: [
      {
        name: "<value>",
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                                             | Type                                                                                                                                              | Required                                                                                                                                          | Description                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `xOpalActor`                                                                                                                                      | *string*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                | The identity the reporting client claims - an email, or an operating-system user name. **Unverified**, used the same way as on `/agent-activity`. |
| `mcpConfigReport`                                                                                                                                 | [components.McpConfigReport](../../models/components/mcpconfigreport.md)                                                                          | :heavy_check_mark:                                                                                                                                | N/A                                                                                                                                               |