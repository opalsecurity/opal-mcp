# SalesforceProfile

Remote info for Salesforce profile.

## Example Usage

```typescript
import { SalesforceProfile } from "opal-mcp/models/components";

let value: SalesforceProfile = {
  profileId: "0PS5Y090202wOV7WAM",
  userLicenseId: "1005Y030081Qb5XJHS",
};
```

## Fields

| Field                         | Type                          | Required                      | Description                   | Example                       |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `profileId`                   | *string*                      | :heavy_check_mark:            | The id of the permission set. | 0PS5Y090202wOV7WAM            |
| `userLicenseId`               | *string*                      | :heavy_check_mark:            | The id of the user license.   | 1005Y030081Qb5XJHS            |