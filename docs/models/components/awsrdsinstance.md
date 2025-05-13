# AwsRdsInstance

Remote info for AWS RDS instance.

## Example Usage

```typescript
import { AwsRdsInstance } from "opal-mcp/models/components";

let value: AwsRdsInstance = {
  instanceId: "demo-mysql-db",
  region: "us-east-2",
  resourceId: "db-AOO8V0XUCNU13XLZXQDQRSN0NQ",
  accountId: "234234234234",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `instanceId`                                               | *string*                                                   | :heavy_check_mark:                                         | The instanceId of the RDS instance.                        | demo-mysql-db                                              |
| `region`                                                   | *string*                                                   | :heavy_check_mark:                                         | The region of the RDS instance.                            | us-east-2                                                  |
| `resourceId`                                               | *string*                                                   | :heavy_check_mark:                                         | The resourceId of the RDS instance.                        | db-AOO8V0XUCNU13XLZXQDQRSN0NQ                              |
| `accountId`                                                | *string*                                                   | :heavy_minus_sign:                                         | The id of the AWS account. Required for AWS Organizations. | 234234234234                                               |