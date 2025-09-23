# IdpGroupMappings
(*idpGroupMappings*)

## Overview

Operations related to IDP group mappings

### Available Operations

* [getIdpGroupMappings](#getidpgroupmappings) - Returns the configured set of available `IdpGroupMapping` objects for an Okta app.
* [updateIdpGroupMappings](#updateidpgroupmappings) - Updates the list of available `IdpGroupMapping` objects for an Okta app.
* [getIdpGroupMapping](#getidpgroupmapping) - Gets an `IdpGroupMapping` object for an Okta app and group.
* [createIdpGroupMapping](#createidpgroupmapping) - Creates or updates an individual `IdpGroupMapping` object (upsert operation).

**Behavior:**
- If the mapping doesn't exist, it will be created with the provided values
- If the mapping exists, only the fields provided in the request will be updated

* [deleteIdpGroupMappings](#deleteidpgroupmappings) - Deletes an `IdpGroupMapping` object.

## getIdpGroupMappings

Returns the configured set of available `IdpGroupMapping` objects for an Okta app.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getIdpGroupMappings" method="get" path="/idp-group-mappings/{app_resource_id}" -->
```typescript
import { OpalMcp } from "opal-mcp";

const opalMcp = new OpalMcp({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await opalMcp.idpGroupMappings.getIdpGroupMappings({
    appResourceId: "4baf8423-db0a-4037-a4cf-f79c60cb67a5",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OpalMcpCore } from "opal-mcp/core.js";
import { idpGroupMappingsGetIdpGroupMappings } from "opal-mcp/funcs/idpGroupMappingsGetIdpGroupMappings.js";

// Use `OpalMcpCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const opalMcp = new OpalMcpCore({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await idpGroupMappingsGetIdpGroupMappings(opalMcp, {
    appResourceId: "4baf8423-db0a-4037-a4cf-f79c60cb67a5",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("idpGroupMappingsGetIdpGroupMappings failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetIdpGroupMappingsRequest](../../models/operations/getidpgroupmappingsrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.IdpGroupMappingList](../../models/components/idpgroupmappinglist.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## updateIdpGroupMappings

Updates the list of available `IdpGroupMapping` objects for an Okta app.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateIdpGroupMappings" method="put" path="/idp-group-mappings/{app_resource_id}" -->
```typescript
import { OpalMcp } from "opal-mcp";

const opalMcp = new OpalMcp({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  await opalMcp.idpGroupMappings.updateIdpGroupMappings({
    appResourceId: "4baf8423-db0a-4037-a4cf-f79c60cb67a5",
    requestBody: {
      mappings: [
        {},
        {},
        {},
      ],
    },
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OpalMcpCore } from "opal-mcp/core.js";
import { idpGroupMappingsUpdateIdpGroupMappings } from "opal-mcp/funcs/idpGroupMappingsUpdateIdpGroupMappings.js";

// Use `OpalMcpCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const opalMcp = new OpalMcpCore({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await idpGroupMappingsUpdateIdpGroupMappings(opalMcp, {
    appResourceId: "4baf8423-db0a-4037-a4cf-f79c60cb67a5",
    requestBody: {
      mappings: [
        {},
        {},
        {},
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("idpGroupMappingsUpdateIdpGroupMappings failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateIdpGroupMappingsRequest](../../models/operations/updateidpgroupmappingsrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## getIdpGroupMapping

Gets an `IdpGroupMapping` object for an Okta app and group.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getIdpGroupMapping" method="get" path="/idp-group-mappings/{app_resource_id}/groups/{group_id}" -->
```typescript
import { OpalMcp } from "opal-mcp";

const opalMcp = new OpalMcp({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await opalMcp.idpGroupMappings.getIdpGroupMapping({
    appResourceId: "4baf8423-db0a-4037-a4cf-f79c60cb67a5",
    groupId: "4baf8423-db0a-4037-a4cf-f79c60cb67a5",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OpalMcpCore } from "opal-mcp/core.js";
import { idpGroupMappingsGetIdpGroupMapping } from "opal-mcp/funcs/idpGroupMappingsGetIdpGroupMapping.js";

// Use `OpalMcpCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const opalMcp = new OpalMcpCore({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await idpGroupMappingsGetIdpGroupMapping(opalMcp, {
    appResourceId: "4baf8423-db0a-4037-a4cf-f79c60cb67a5",
    groupId: "4baf8423-db0a-4037-a4cf-f79c60cb67a5",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("idpGroupMappingsGetIdpGroupMapping failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetIdpGroupMappingRequest](../../models/operations/getidpgroupmappingrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.IdpGroupMapping](../../models/components/idpgroupmapping.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## createIdpGroupMapping

Creates or updates an individual `IdpGroupMapping` object (upsert operation).

**Behavior:**
- If the mapping doesn't exist, it will be created with the provided values
- If the mapping exists, only the fields provided in the request will be updated


### Example Usage

<!-- UsageSnippet language="typescript" operationID="createIdpGroupMapping" method="post" path="/idp-group-mappings/{app_resource_id}/groups/{group_id}" -->
```typescript
import { OpalMcp } from "opal-mcp";

const opalMcp = new OpalMcp({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await opalMcp.idpGroupMappings.createIdpGroupMapping({
    appResourceId: "4baf8423-db0a-4037-a4cf-f79c60cb67a5",
    groupId: "4baf8423-db0a-4037-a4cf-f79c60cb67a5",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OpalMcpCore } from "opal-mcp/core.js";
import { idpGroupMappingsCreateIdpGroupMapping } from "opal-mcp/funcs/idpGroupMappingsCreateIdpGroupMapping.js";

// Use `OpalMcpCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const opalMcp = new OpalMcpCore({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await idpGroupMappingsCreateIdpGroupMapping(opalMcp, {
    appResourceId: "4baf8423-db0a-4037-a4cf-f79c60cb67a5",
    groupId: "4baf8423-db0a-4037-a4cf-f79c60cb67a5",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("idpGroupMappingsCreateIdpGroupMapping failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateIdpGroupMappingRequest](../../models/operations/createidpgroupmappingrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.IdpGroupMapping](../../models/components/idpgroupmapping.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## deleteIdpGroupMappings

Deletes an `IdpGroupMapping` object.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_idp_group_mappings" method="delete" path="/idp-group-mappings/{app_resource_id}/groups/{group_id}" -->
```typescript
import { OpalMcp } from "opal-mcp";

const opalMcp = new OpalMcp({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  await opalMcp.idpGroupMappings.deleteIdpGroupMappings({
    appResourceId: "4baf8423-db0a-4037-a4cf-f79c60cb67a5",
    groupId: "4baf8423-db0a-4037-a4cf-f79c60cb67a5",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OpalMcpCore } from "opal-mcp/core.js";
import { idpGroupMappingsDeleteIdpGroupMappings } from "opal-mcp/funcs/idpGroupMappingsDeleteIdpGroupMappings.js";

// Use `OpalMcpCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const opalMcp = new OpalMcpCore({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await idpGroupMappingsDeleteIdpGroupMappings(opalMcp, {
    appResourceId: "4baf8423-db0a-4037-a4cf-f79c60cb67a5",
    groupId: "4baf8423-db0a-4037-a4cf-f79c60cb67a5",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("idpGroupMappingsDeleteIdpGroupMappings failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteIdpGroupMappingsRequest](../../models/operations/deleteidpgroupmappingsrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |