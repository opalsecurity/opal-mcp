# AwsEc2Instance

Remote info for AWS EC2 instance.

## Example Usage

```typescript
import { AwsEc2Instance } from "opal-mcp/models/components";

let value: AwsEc2Instance = {
  instanceId: "i-13f1a1e2899f9e93a",
  region: "us-east-2",
  accountId: "234234234234",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `instanceId`                                               | *string*                                                   | :heavy_check_mark:                                         | The instanceId of the EC2 instance.                        | i-13f1a1e2899f9e93a                                        |
| `region`                                                   | *string*                                                   | :heavy_check_mark:                                         | The region of the EC2 instance.                            | us-east-2                                                  |
| `accountId`                                                | *string*                                                   | :heavy_minus_sign:                                         | The id of the AWS account. Required for AWS Organizations. | 234234234234                                               |