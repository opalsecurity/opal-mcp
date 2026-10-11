# CreateAppInfo

Information needed to create an app. Currently supports only Push-only
apps (`CUSTOM`) and Custom Connector apps (`CUSTOM_CONNECTOR`).

## Example Usage

```typescript
import { CreateAppInfo } from "opal-mcp/models/components";

let value: CreateAppInfo = {
  name: "My Push-only App",
  description: "Bookkeeping app for internal tools.",
  adminOwnerId: "7c86c85d-0651-43e2-a748-d69d658418e8",
  appType: "OKTA_DIRECTORY",
  visibility: "GLOBAL",
  importVisibility: "GLOBAL",
  customConnector: {
    identifier: "my-connector",
    baseUrl: "https://my-connector.example.com",
    signingSecret: "<value>",
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `name`                                                                                       | *string*                                                                                     | :heavy_check_mark:                                                                           | The name of the app.                                                                         | My Push-only App                                                                             |
| `description`                                                                                | *string*                                                                                     | :heavy_check_mark:                                                                           | A description of the app.                                                                    | Bookkeeping app for internal tools.                                                          |
| `adminOwnerId`                                                                               | *string*                                                                                     | :heavy_check_mark:                                                                           | The ID of the owner of the app.                                                              | 7c86c85d-0651-43e2-a748-d69d658418e8                                                         |
| `appType`                                                                                    | [components.AppTypeEnum](../../models/components/apptypeenum.md)                             | :heavy_check_mark:                                                                           | The type of an app.                                                                          | OKTA_DIRECTORY                                                                               |
| `visibility`                                                                                 | [components.VisibilityTypeEnum](../../models/components/visibilitytypeenum.md)               | :heavy_minus_sign:                                                                           | The visibility level of the entity.                                                          | GLOBAL                                                                                       |
| `visibilityGroupIds`                                                                         | *string*[]                                                                                   | :heavy_minus_sign:                                                                           | The IDs of groups that can see this app when visibility is `LIMITED`.                        |                                                                                              |
| `importVisibility`                                                                           | [components.VisibilityTypeEnum](../../models/components/visibilitytypeenum.md)               | :heavy_minus_sign:                                                                           | The visibility level of the entity.                                                          | GLOBAL                                                                                       |
| `customConnector`                                                                            | [components.CreateCustomConnectorInfo](../../models/components/createcustomconnectorinfo.md) | :heavy_minus_sign:                                                                           | Information needed to create a Custom Connector app.                                         |                                                                                              |