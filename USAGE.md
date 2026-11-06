<!-- Start SDK Example Usage [usage] -->
```typescript
import { OpalMcp } from "opal-mcp";

const opalMcp = new OpalMcp({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await opalMcp.agentActivity.reportAgentActivity({
    agentActivityIngestRequest: {},
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->