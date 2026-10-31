# CreateServiceUserRequest

Request body for `POST /service-users`. Intentionally minimal: only the
two fields that uniquely identify a new service user. Role grants are
a separate resource managed through `/role-assignments`, which keeps
each grant independently addressable and avoids silent drift when
grants are added or revoked through another code path.


## Example Usage

```typescript
import { CreateServiceUserRequest } from "opal-mcp/models/components";

let value: CreateServiceUserRequest = {
  name: "paladin-prod",
  ownerId: "7c86c85d-0651-43e2-a748-d69d658418e8",
};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     | Example                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                          | *string*                                                                                                                        | :heavy_check_mark:                                                                                                              | The display name of the service user.                                                                                           | paladin-prod                                                                                                                    |
| `ownerId`                                                                                                                       | *string*                                                                                                                        | :heavy_check_mark:                                                                                                              | The ID of the owner (team of record) that owns the service user. Must reference an existing owner in the caller's organization. | 7c86c85d-0651-43e2-a748-d69d658418e8                                                                                            |