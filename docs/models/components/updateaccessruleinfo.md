# UpdateAccessRuleInfo

# UpdateAccessRuleInfo Object
### Description
The `UpdateAccessRuleInfo` object is used as an input to the UpdateAccessRule and CreateAccessRule API.

## Example Usage

```typescript
import { UpdateAccessRuleInfo } from "opal-mcp/models/components";

let value: UpdateAccessRuleInfo = {
  name: "Platform Engineering",
  description:
    "This access rule represents all platform engineers in the company.",
  adminOwnerId: "7c86c85d-0651-43e2-a748-d69d658418e8",
  status: "ACTIVE",
  ruleClauses: {
    when: {
      clauses: [
        {
          selectors: [
            {
              key: "<key>",
              value: "<value>",
              connectionId: "cd47f80e-c21f-4221-82c3-b5100950e3ec",
            },
          ],
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `name`                                                                                         | *string*                                                                                       | :heavy_check_mark:                                                                             | The name of the access rule.                                                                   | Platform Engineering                                                                           |
| `description`                                                                                  | *string*                                                                                       | :heavy_check_mark:                                                                             | A description of the group.                                                                    | This access rule represents all platform engineers in the company.                             |
| `adminOwnerId`                                                                                 | *string*                                                                                       | :heavy_check_mark:                                                                             | The ID of the owner of the group.                                                              | 7c86c85d-0651-43e2-a748-d69d658418e8                                                           |
| `status`                                                                                       | [components.UpdateAccessRuleInfoStatus](../../models/components/updateaccessruleinfostatus.md) | :heavy_check_mark:                                                                             | The status of the access rule.                                                                 | ACTIVE                                                                                         |
| `ruleClauses`                                                                                  | [components.RuleClauses](../../models/components/ruleclauses.md)                               | :heavy_check_mark:                                                                             | N/A                                                                                            |                                                                                                |