# ListRoleAssignmentsRequest

## Example Usage

```typescript
import { ListRoleAssignmentsRequest } from "opal-mcp/models/operations";

let value: ListRoleAssignmentsRequest = {
  entityType: "RESOURCE",
  principalType: "GROUP",
  cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
  pageSize: 200,
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `entityIds`                                                                                        | *string*[]                                                                                         | :heavy_minus_sign:                                                                                 | Filter to grants on these entity (resource or group) IDs. Any-match.                               |                                                                                                    |
| `principalIds`                                                                                     | *string*[]                                                                                         | :heavy_minus_sign:                                                                                 | Filter to grants with these principal (user, group, or resource) IDs. Any-match.                   |                                                                                                    |
| `entityType`                                                                                       | [components.RoleAssignmentEntityTypeEnum](../../models/components/roleassignmententitytypeenum.md) | :heavy_minus_sign:                                                                                 | Filter by entity type. Omit to include both RESOURCE and GROUP entities.                           | RESOURCE                                                                                           |
| `principalType`                                                                                    | [components.EntityTypeEnum](../../models/components/entitytypeenum.md)                             | :heavy_minus_sign:                                                                                 | Filter by principal type. Omit to include USER, GROUP, and RESOURCE principals.                    | GROUP                                                                                              |
| `cursor`                                                                                           | *string*                                                                                           | :heavy_minus_sign:                                                                                 | The pagination cursor value.                                                                       | cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw                                           |
| `pageSize`                                                                                         | *number*                                                                                           | :heavy_minus_sign:                                                                                 | Number of results to return per page. Default is 200.                                              | 200                                                                                                |