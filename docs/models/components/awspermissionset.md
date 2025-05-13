# AwsPermissionSet

Remote info for AWS Identity Center permission set.

## Example Usage

```typescript
import { AwsPermissionSet } from "opal-mcp/models/components";

let value: AwsPermissionSet = {
  arn: "arn:aws:sso:::permissionSet/asdf-32139302d201d32/ps-f03323201211e1b9",
  accountId: "234234234234",
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `arn`                                                                 | *string*                                                              | :heavy_check_mark:                                                    | The ARN of the permission set.                                        | arn:aws:sso:::permissionSet/asdf-32139302d201d32/ps-f03323201211e1b9  |
| `accountId`                                                           | *string*                                                              | :heavy_check_mark:                                                    | The ID of an AWS account to which this permission set is provisioned. | 234234234234                                                          |