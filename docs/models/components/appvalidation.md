# AppValidation

# App validation object
### Description
The `AppValidation` object is used to represent a validation check of an apps' configuration and permissions.

### Usage Example
List from the `GET Apps` endpoint.

## Example Usage

```typescript
import { AppValidation } from "opal-mcp/models/components";

let value: AppValidation = {
  key: "iam:GetRole",
  name: "Opal's service account is missing the 'iam:GetRole' permission.",
  usageReason:
    "Opal uses the 'iam:GetRole' permissions to view access to resources.",
  details:
    "403 Google API Error. Service account is not authorized to access role assignments.",
  severity: "HIGH",
  status: "FAILED",
  updatedAt: new Date("2021-01-06T20:00:00Z"),
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       | Example                                                                                           |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `key`                                                                                             | *string*                                                                                          | :heavy_check_mark:                                                                                | The key of the app validation. These are not unique IDs between runs.                             | iam:GetUser                                                                                       |
| `name`                                                                                            | *any*                                                                                             | :heavy_check_mark:                                                                                | The human-readable description of whether the validation has the permissions.                     | Opal's service account is missing the 'iam:GetUser' description.                                  |
| `usageReason`                                                                                     | *string*                                                                                          | :heavy_minus_sign:                                                                                | The reason for needing the validation.                                                            | Opal uses the 'iam:GetUser' permission to import users.                                           |
| `details`                                                                                         | *string*                                                                                          | :heavy_minus_sign:                                                                                | Extra details regarding the validation. Could be an error message or restrictions on permissions. | 403 Google API Error. Service account is not authorized to access role assignments.               |
| `severity`                                                                                        | [components.AppValidationSeverityEnum](../../models/components/appvalidationseverityenum.md)      | :heavy_check_mark:                                                                                | The severity of an app validation.                                                                | CRITICAL                                                                                          |
| `status`                                                                                          | [components.AppValidationStatusEnum](../../models/components/appvalidationstatusenum.md)          | :heavy_check_mark:                                                                                | The status of an app validation.                                                                  | FAILED                                                                                            |
| `updatedAt`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)     | :heavy_check_mark:                                                                                | The date and time the app validation was last run.                                                | 2021-01-06 20:00:00 +0000 UTC                                                                     |