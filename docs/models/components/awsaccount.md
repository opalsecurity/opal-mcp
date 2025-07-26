# AwsAccount

Remote info for AWS account.

## Example Usage

```typescript
import { AwsAccount } from "opal-mcp/models/components";

let value: AwsAccount = {
  accountId: "234234234234",
  organizationalUnitId: "ou-1234",
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       | Example                                                                           |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `accountId`                                                                       | *string*                                                                          | :heavy_check_mark:                                                                | The id of the AWS account.                                                        | 234234234234                                                                      |
| `organizationalUnitId`                                                            | *string*                                                                          | :heavy_minus_sign:                                                                | The id of the AWS organizational unit. Required only if customer has OUs enabled. | ou-1234                                                                           |