# ServiceUsers

## Overview

Operations related to service users (non-human identities owned by a team)

### Available Operations

* [createServiceUser](#createserviceuser) - Create service user

## createServiceUser

Creates a new service user (a non-human identity owned by a team). Mirrors
the GraphQL `createServiceUser` mutation; admin-only.

The returned `User` object is the newly created service user and is a
regular `User` row — read it later via `GET /users/{user_id}`, delete it
with `DELETE /users/{user_id}`, and manage its tags via the usual
`/users/{user_id}/tags` endpoints.

**Role grants are a separate concern.** To grant a service user access
to resources or groups, use `POST /role-assignments` (or the per-pair
endpoints such as `/resources/{id}/users/{id}`). Keeping role
assignments out of this request body means each grant stays
independently addressable — the shape Terraform and other declarative
clients prefer, with no field here that would silently drift when a
grant is added or revoked through a different code path.

**Automations are not configurable here either.** The GraphQL mutation
accepts a wide typed-union of automation configuration; that surface is
intentionally omitted from this REST endpoint for the same reason.
Service users created through this endpoint start with no automations.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="createServiceUser" method="post" path="/service-users" -->
```typescript
import { OpalMcp } from "opal-mcp";

const opalMcp = new OpalMcp({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await opalMcp.serviceUsers.createServiceUser({
    name: "paladin-prod",
    ownerId: "7c86c85d-0651-43e2-a748-d69d658418e8",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OpalMcpCore } from "opal-mcp/core.js";
import { serviceUsersCreateServiceUser } from "opal-mcp/funcs/serviceUsersCreateServiceUser.js";

// Use `OpalMcpCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const opalMcp = new OpalMcpCore({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await serviceUsersCreateServiceUser(opalMcp, {
    name: "paladin-prod",
    ownerId: "7c86c85d-0651-43e2-a748-d69d658418e8",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("serviceUsersCreateServiceUser failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.CreateServiceUserRequest](../../models/components/createserviceuserrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.User](../../models/components/user.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |