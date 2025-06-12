# UpdateAccessRuleRequest

## Example Usage

```typescript
import { UpdateAccessRuleRequest } from "opal-mcp/models/operations";

let value: UpdateAccessRuleRequest = {
  accessRuleId: "1b978423-db0a-4037-a4cf-f79c60cb67b3",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `accessRuleId`                                                                     | *string*                                                                           | :heavy_check_mark:                                                                 | The access rule ID (group ID) of the access rule.                                  | 1b978423-db0a-4037-a4cf-f79c60cb67b3                                               |
| `updateAccessRuleInfo`                                                             | [components.UpdateAccessRuleInfo](../../models/components/updateaccessruleinfo.md) | :heavy_check_mark:                                                                 | N/A                                                                                |                                                                                    |