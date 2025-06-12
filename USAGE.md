<!-- Start SDK Example Usage [usage] -->
```typescript
import { OpalMcp } from "opal-mcp";

const opalMcp = new OpalMcp({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await opalMcp.apps.getApps({
    appTypeFilter: [
      "OKTA_DIRECTORY",
      "GIT_HUB",
    ],
    ownerFilter: "29827fb8-f2dd-4e80-9576-28e31e9934ac",
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->