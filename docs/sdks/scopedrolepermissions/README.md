# ScopedRolePermissions
(*scopedRolePermissions*)

## Overview

Operations related to scoped role permissions

### Available Operations

* [getResourceScopedRolePermissions](#getresourcescopedrolepermissions) - Returns all the scoped role permissions that apply to the given resource. Only OPAL_SCOPED_ROLE resource type supports this field.
* [setResourceScopedRolePermissions](#setresourcescopedrolepermissions) - Sets all the scoped role permissions on an OPAL_SCOPED_ROLE resource.

## getResourceScopedRolePermissions

Returns all the scoped role permissions that apply to the given resource. Only OPAL_SCOPED_ROLE resource type supports this field.

### Example Usage

```typescript
import { OpalMcp } from "opal-mcp";

const opalMcp = new OpalMcp({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await opalMcp.scopedRolePermissions.getResourceScopedRolePermissions({
    resourceId: "1b978423-db0a-4037-a4cf-f79c60cb67b3",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OpalMcpCore } from "opal-mcp/core.js";
import { resourcesGetResourceScopedRolePermissions } from "opal-mcp/funcs/resourcesGetResourceScopedRolePermissions.js";

// Use `OpalMcpCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const opalMcp = new OpalMcpCore({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await resourcesGetResourceScopedRolePermissions(opalMcp, {
    resourceId: "1b978423-db0a-4037-a4cf-f79c60cb67b3",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("resourcesGetResourceScopedRolePermissions failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetResourceScopedRolePermissionsRequest](../../models/operations/getresourcescopedrolepermissionsrequest.md)                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ScopedRolePermissionList](../../models/components/scopedrolepermissionlist.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## setResourceScopedRolePermissions

Sets all the scoped role permissions on an OPAL_SCOPED_ROLE resource.

### Example Usage

```typescript
import { OpalMcp } from "opal-mcp";

const opalMcp = new OpalMcp({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await opalMcp.scopedRolePermissions.setResourceScopedRolePermissions({
    resourceId: "1b978423-db0a-4037-a4cf-f79c60cb67b3",
    scopedRolePermissionList: {
      permissions: [
        {
          targetIds: [
            "a381e7a3-e5e0-4c48-b1d6-4ccb4c191bc1",
            "8294e9c9-deb6-48e9-9c99-da2a1e04a87f",
          ],
          targetType: "RESOURCE",
          permissionName: "READ",
          allowAll: false,
        },
      ],
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OpalMcpCore } from "opal-mcp/core.js";
import { resourcesSetResourceScopedRolePermissions } from "opal-mcp/funcs/resourcesSetResourceScopedRolePermissions.js";

// Use `OpalMcpCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const opalMcp = new OpalMcpCore({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await resourcesSetResourceScopedRolePermissions(opalMcp, {
    resourceId: "1b978423-db0a-4037-a4cf-f79c60cb67b3",
    scopedRolePermissionList: {
      permissions: [
        {
          targetIds: [
            "a381e7a3-e5e0-4c48-b1d6-4ccb4c191bc1",
            "8294e9c9-deb6-48e9-9c99-da2a1e04a87f",
          ],
          targetType: "RESOURCE",
          permissionName: "READ",
          allowAll: false,
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("resourcesSetResourceScopedRolePermissions failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SetResourceScopedRolePermissionsRequest](../../models/operations/setresourcescopedrolepermissionsrequest.md)                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ScopedRolePermissionList](../../models/components/scopedrolepermissionlist.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |