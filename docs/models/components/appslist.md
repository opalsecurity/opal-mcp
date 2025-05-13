# AppsList

A list of apps.

## Example Usage

```typescript
import { AppsList } from "opal-mcp/models/components";

let value: AppsList = {
  apps: [
    {
      appId: "f454d283-ca87-4a8a-bdbb-df212eca5353",
      name: "Okta Org",
      description: "Okta directory for the engineering team.",
      adminOwnerId: "7c86c85d-0651-43e2-a748-d69d658418e8",
      appType: "OKTA_DIRECTORY",
    },
  ],
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `apps`                                             | [components.App](../../models/components/app.md)[] | :heavy_check_mark:                                 | N/A                                                |