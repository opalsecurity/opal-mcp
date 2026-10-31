# RoleAssignments

## Overview

Operations related to role assignments (general grants between an entity and a principal)

### Available Operations

* [addRoleAssignments](#addroleassignments) - Add role assignments
* [listRoleAssignments](#listroleassignments) - List role assignments
* [removeRoleAssignments](#removeroleassignments) - Remove role assignments

## addRoleAssignments

Grants one or more principals (user, group, or resource) access to one or more
entities (resource or group). The request body is batched to match the GraphQL
`addRoleAssignments` mutation, which this endpoint thin-wraps. The caller must
hold the `EDIT_ASSIGNMENTS` role permission on every entity in the batch.

Omit `access_level_remote_id` for entities that have a single default access
level. Omit `duration_minutes` (or send `0`) for an indefinite grant.

**Atomicity:** the batch is applied as a single transaction. If any entry
fails input validation, authorization, lookup, or creation, **no entries
are created** and the response identifies the first failing entry's
`entity_id` and `principal_id` (and the request-array index for input
validation errors). Clients should retry with the offending entry
removed; partial-success is intentionally not supported, matching the
semantics of the GraphQL `addRoleAssignments` mutation that this
endpoint wraps.

Prefer this endpoint for batch or programmatic use (e.g. Terraform). For a
single grant on a specific entity/principal pair, the per-pair endpoints —
`/resources/{id}/users/{id}`, `/groups/{id}/users/{id}`,
`/groups/{id}/resources/{id}`, `/groups/{id}/containing-groups`,
`/resources/{id}/non-human-identities/{id}` — are often simpler.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="addRoleAssignments" method="post" path="/role-assignments" -->
```typescript
import { OpalMcp } from "opal-mcp";

const opalMcp = new OpalMcp({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await opalMcp.roleAssignments.addRoleAssignments({
    roleAssignments: [],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OpalMcpCore } from "opal-mcp/core.js";
import { roleAssignmentsAddRoleAssignments } from "opal-mcp/funcs/roleAssignmentsAddRoleAssignments.js";

// Use `OpalMcpCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const opalMcp = new OpalMcpCore({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await roleAssignmentsAddRoleAssignments(opalMcp, {
    roleAssignments: [],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("roleAssignmentsAddRoleAssignments failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.AddRoleAssignmentsRequest](../../models/components/addroleassignmentsrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.AddRoleAssignmentsResponse](../../models/components/addroleassignmentsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## listRoleAssignments

Returns a paginated list of role assignments. This endpoint is
**admin-only**: the caller's bearer token must belong to a user with the
admin or read-only admin role. Non-admin callers receive 403.

Mirrors the GraphQL `directRoleAssignments` query and shares the same
underlying code path, so pagination order, sort default
(`first_granted_at` DESC), and the set of grants returned are identical
across the two surfaces.

The REST filter surface is intentionally narrower on first ship — sort,
risk-factor filters, text search, access-scope filters, the
agents/humans toggle, and access-level filtering are deferred to a
future revision. For a single entity/principal pair, the per-pair
endpoints — `/resources/{resource_id}/users`,
`/resources/{resource_id}/groups`,
`/resources/{resource_id}/non-human-identities`,
`/groups/{group_id}/users`, `/groups/{group_id}/containing-groups` —
are often simpler.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="listRoleAssignments" method="get" path="/role-assignments" -->
```typescript
import { OpalMcp } from "opal-mcp";

const opalMcp = new OpalMcp({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await opalMcp.roleAssignments.listRoleAssignments({
    entityType: "RESOURCE",
    principalType: "GROUP",
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    pageSize: 200,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OpalMcpCore } from "opal-mcp/core.js";
import { roleAssignmentsListRoleAssignments } from "opal-mcp/funcs/roleAssignmentsListRoleAssignments.js";

// Use `OpalMcpCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const opalMcp = new OpalMcpCore({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await roleAssignmentsListRoleAssignments(opalMcp, {
    entityType: "RESOURCE",
    principalType: "GROUP",
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    pageSize: 200,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("roleAssignmentsListRoleAssignments failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListRoleAssignmentsRequest](../../models/operations/listroleassignmentsrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.PaginatedRoleAssignmentsList](../../models/components/paginatedroleassignmentslist.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## removeRoleAssignments

Revoke one or more role assignments. Each entry identifies a specific
stored grant by the 5-tuple `(entity_id, entity_type, principal_id,
principal_type, access_level_remote_id)` — see the field description
on `access_level_remote_id` for when it must be supplied and when it
must be omitted. The call is idempotent: an entry that does not match
any stored grant is silently skipped and absent from `entries` in the
response. Caller must have `EDIT_ASSIGNMENTS` on each entity.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeRoleAssignments" method="delete" path="/role-assignments" -->
```typescript
import { OpalMcp } from "opal-mcp";

const opalMcp = new OpalMcp({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await opalMcp.roleAssignments.removeRoleAssignments({
    roleAssignments: [],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OpalMcpCore } from "opal-mcp/core.js";
import { roleAssignmentsRemoveRoleAssignments } from "opal-mcp/funcs/roleAssignmentsRemoveRoleAssignments.js";

// Use `OpalMcpCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const opalMcp = new OpalMcpCore({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await roleAssignmentsRemoveRoleAssignments(opalMcp, {
    roleAssignments: [],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("roleAssignmentsRemoveRoleAssignments failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.RemoveRoleAssignmentsRequest](../../models/components/removeroleassignmentsrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.RemoveRoleAssignmentsResponse](../../models/components/removeroleassignmentsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |