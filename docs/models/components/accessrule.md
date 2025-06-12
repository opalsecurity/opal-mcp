# AccessRule

# Access Rule Object
### Description
The `AccessRule` object is used to represent an access rule configuration.

### Usage Example
Get access rule configurations from the `GET Access Rule Configs` endpoint.

## Example Usage

```typescript
import { AccessRule } from "opal-mcp/models/components";

let value: AccessRule = {
  accessRuleId: "7c86c85d-0651-43e2-a748-d69d658418e8",
  name: "Platform Engineering",
  description:
    "This access rule represents all platform engineers in the company.",
  adminOwnerId: "7c86c85d-0651-43e2-a748-d69d658418e8",
  status: "ACTIVE",
  ruleClauses: {
    when: {
      clauses: [],
    },
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `accessRuleId`                                                             | *string*                                                                   | :heavy_check_mark:                                                         | The ID (group ID) of the access rule.                                      | 7c86c85d-0651-43e2-a748-d69d658418e8                                       |
| `name`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | The name of the access rule.                                               | Platform Engineering                                                       |
| `description`                                                              | *string*                                                                   | :heavy_check_mark:                                                         | A description of the group.                                                | This access rule represents all platform engineers in the company.         |
| `adminOwnerId`                                                             | *string*                                                                   | :heavy_check_mark:                                                         | The ID of the owner of the group.                                          | 7c86c85d-0651-43e2-a748-d69d658418e8                                       |
| `status`                                                                   | [components.AccessRuleStatus](../../models/components/accessrulestatus.md) | :heavy_check_mark:                                                         | The status of the access rule.                                             | ACTIVE                                                                     |
| `ruleClauses`                                                              | [components.RuleClauses](../../models/components/ruleclauses.md)           | :heavy_check_mark:                                                         | N/A                                                                        |                                                                            |