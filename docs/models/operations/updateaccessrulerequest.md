# UpdateAccessRuleRequest

## Example Usage

```typescript
import { UpdateAccessRuleRequest } from "opal-mcp/models/operations";

let value: UpdateAccessRuleRequest = {
  accessRuleId: "1b978423-db0a-4037-a4cf-f79c60cb67b3",
  updateAccessRuleInfo: {
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
                connectionId: "79c81cd3-ea07-4f72-9ce5-fdf97a9cd99f",
              },
            ],
          },
        ],
      },
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `accessRuleId`                                                                     | *string*                                                                           | :heavy_check_mark:                                                                 | The access rule ID (group ID) of the access rule.                                  | 1b978423-db0a-4037-a4cf-f79c60cb67b3                                               |
| `updateAccessRuleInfo`                                                             | [components.UpdateAccessRuleInfo](../../models/components/updateaccessruleinfo.md) | :heavy_check_mark:                                                                 | N/A                                                                                |                                                                                    |