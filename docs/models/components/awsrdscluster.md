# AwsRdsCluster

Remote info for AWS RDS cluster.

## Example Usage

```typescript
import { AwsRdsCluster } from "opal-mcp/models/components";

let value: AwsRdsCluster = {
  clusterId: "demo-mysql-cluster",
  region: "us-east-2",
  resourceId: "cluster-AOO8V0XUCNU13XLZXQDQRSN0NQ",
  accountId: "234234234234",
  databaseName: "mydatabase",
  engine: "POSTGRESQL",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              | Example                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `clusterId`                                                                                                              | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | The clusterId of the RDS cluster.                                                                                        | demo-mysql-cluster                                                                                                       |
| `region`                                                                                                                 | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | The region of the RDS cluster.                                                                                           | us-east-2                                                                                                                |
| `resourceId`                                                                                                             | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | The resourceId of the RDS cluster.                                                                                       | cluster-AOO8V0XUCNU13XLZXQDQRSN0NQ                                                                                       |
| `accountId`                                                                                                              | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | The id of the AWS account. Required for AWS Organizations.                                                               | 234234234234                                                                                                             |
| `databaseName`                                                                                                           | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | The name of the database in the RDS cluster. This can be the value of the tag `opal:database-name` or the database name. | mydatabase                                                                                                               |
| `engine`                                                                                                                 | [components.RDSEngineEnum](../../models/components/rdsengineenum.md)                                                     | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |                                                                                                                          |