# AlicloudRamRole

Remote info for AliCloud RAM role.

## Example Usage

```typescript
import { AlicloudRamRole } from "opal-mcp/models/components";

let value: AlicloudRamRole = {
  roleArn: "acs:ram::1234567890:role/MyRole",
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       | Example                           |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `roleArn`                         | *string*                          | :heavy_check_mark:                | The ARN of the AliCloud RAM role. | acs:ram::1234567890:role/MyRole   |