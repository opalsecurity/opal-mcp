# AwsOrganizationalUnit

Remote info for AWS organizational unit.

## Example Usage

```typescript
import { AwsOrganizationalUnit } from "opal-mcp/models/components";

let value: AwsOrganizationalUnit = {
  parentId: "ou-1234",
  organizationalUnitId: "ou-1234",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `parentId`                                                   | *string*                                                     | :heavy_minus_sign:                                           | The id of the parent organizational unit.                    | ou-1234                                                      |
| `organizationalUnitId`                                       | *string*                                                     | :heavy_check_mark:                                           | The id of the AWS organizational unit that is being created. | ou-1234                                                      |