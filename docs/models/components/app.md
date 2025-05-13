# App

# App Object
### Description
The `App` object is used to represent an app to an application.

### Usage Example
List from the `GET Apps` endpoint.

## Example Usage

```typescript
import { App } from "opal-mcp/models/components";

let value: App = {
  appId: "f454d283-ca87-4a8a-bdbb-df212eca5353",
  name: "Okta Org",
  description: "Okta directory for the engineering team.",
  adminOwnerId: "7c86c85d-0651-43e2-a748-d69d658418e8",
  appType: "OKTA_DIRECTORY",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `appId`                                                                | *string*                                                               | :heavy_check_mark:                                                     | The ID of the app.                                                     | f454d283-ca87-4a8a-bdbb-df212eca5353                                   |
| `name`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | The name of the app.                                                   | Okta Org                                                               |
| `description`                                                          | *string*                                                               | :heavy_check_mark:                                                     | A description of the app.                                              | Okta directory for the engineering team.                               |
| `adminOwnerId`                                                         | *string*                                                               | :heavy_check_mark:                                                     | The ID of the owner of the app.                                        | 7c86c85d-0651-43e2-a748-d69d658418e8                                   |
| `appType`                                                              | [components.AppTypeEnum](../../models/components/apptypeenum.md)       | :heavy_check_mark:                                                     | The type of an app.                                                    | OKTA_DIRECTORY                                                         |
| `validations`                                                          | [components.AppValidation](../../models/components/appvalidation.md)[] | :heavy_minus_sign:                                                     | Validation checks of an apps' configuration and permissions.           |                                                                        |