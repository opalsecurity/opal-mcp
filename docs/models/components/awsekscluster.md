# AwsEksCluster

Remote info for AWS EKS cluster.

## Example Usage

```typescript
import { AwsEksCluster } from "opal-mcp/models/components";

let value: AwsEksCluster = {
  arn: "arn:aws:eks:us-east-2:234234234234:cluster/testcluster",
  accountId: "234234234234",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `arn`                                                      | *string*                                                   | :heavy_check_mark:                                         | The ARN of the EKS cluster.                                | arn:aws:eks:us-east-2:234234234234:cluster/testcluster     |
| `accountId`                                                | *string*                                                   | :heavy_minus_sign:                                         | The id of the AWS account. Required for AWS Organizations. | 234234234234                                               |