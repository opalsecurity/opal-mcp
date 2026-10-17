# RoleAssignments

## Overview

Operations related to role assignments (general grants between an entity and a principal)

### Available Operations

* [addRoleAssignments](#addroleassignments) - Add role assignments

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