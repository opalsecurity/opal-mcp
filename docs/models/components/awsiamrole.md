# AwsIamRole

Remote info for AWS IAM role.

## Example Usage

```typescript
import { AwsIamRole } from "opal-mcp/models/components";

let value: AwsIamRole = {
  arn: "arn:aws:iam::179308207300:role/MyRole",
  accountId: "234234234234",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `arn`                                                      | *string*                                                   | :heavy_check_mark:                                         | The ARN of the IAM role.                                   | arn:aws:iam::179308207300:role/MyRole                      |
| `accountId`                                                | *string*                                                   | :heavy_minus_sign:                                         | The id of the AWS account. Required for AWS Organizations. | 234234234234                                               |