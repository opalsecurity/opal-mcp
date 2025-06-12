# AccessRules
(*accessRules*)

## Overview

### Available Operations

* [createAccessRule](#createaccessrule) - Creates a new access rule config for the given group_id.
* [getAccessRule](#getaccessrule) - Returns a list of access rule config given the group_id of the access rule.
* [updateAccessRule](#updateaccessrule) - Updates the access rule config for the given group_id.

## createAccessRule

Creates a new access rule config for the given group_id.

### Example Usage

```typescript
import { OpalMcp } from "opal-mcp";

const opalMcp = new OpalMcp({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await opalMcp.accessRules.createAccessRule({
    name: "Platform Engineering",
    description: "This access rule represents all platform engineers in the company.",
    adminOwnerId: "7c86c85d-0651-43e2-a748-d69d658418e8",
    status: "ACTIVE",
    ruleClauses: {
      when: {
        clauses: [],
      },
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
import { accessRulesCreateAccessRule } from "opal-mcp/funcs/accessRulesCreateAccessRule.js";

// Use `OpalMcpCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const opalMcp = new OpalMcpCore({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await accessRulesCreateAccessRule(opalMcp, {
    name: "Platform Engineering",
    description: "This access rule represents all platform engineers in the company.",
    adminOwnerId: "7c86c85d-0651-43e2-a748-d69d658418e8",
    status: "ACTIVE",
    ruleClauses: {
      when: {
        clauses: [],
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accessRulesCreateAccessRule failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.UpdateAccessRuleInfo](../../models/components/updateaccessruleinfo.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.AccessRule](../../models/components/accessrule.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## getAccessRule

Returns a list of access rule config given the group_id of the access rule.

### Example Usage

```typescript
import { OpalMcp } from "opal-mcp";

const opalMcp = new OpalMcp({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await opalMcp.accessRules.getAccessRule({
    accessRuleId: "1b978423-db0a-4037-a4cf-f79c60cb67b3",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OpalMcpCore } from "opal-mcp/core.js";
import { accessRulesGetAccessRule } from "opal-mcp/funcs/accessRulesGetAccessRule.js";

// Use `OpalMcpCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const opalMcp = new OpalMcpCore({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await accessRulesGetAccessRule(opalMcp, {
    accessRuleId: "1b978423-db0a-4037-a4cf-f79c60cb67b3",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accessRulesGetAccessRule failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAccessRuleRequest](../../models/operations/getaccessrulerequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.AccessRule](../../models/components/accessrule.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## updateAccessRule

Updates the access rule config for the given group_id.

### Example Usage

```typescript
import { OpalMcp } from "opal-mcp";

const opalMcp = new OpalMcp({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await opalMcp.accessRules.updateAccessRule({
    accessRuleId: "1b978423-db0a-4037-a4cf-f79c60cb67b3",
    updateAccessRuleInfo: {
      name: "Platform Engineering",
      description: "This access rule represents all platform engineers in the company.",
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
                  connectionId: "fb76ee36-3589-45c2-b5e3-11bae3b92e8e",
                },
                {
                  key: "<key>",
                  value: "<value>",
                  connectionId: "fb76ee36-3589-45c2-b5e3-11bae3b92e8e",
                },
              ],
            },
            {
              selectors: [
                {
                  key: "<key>",
                  value: "<value>",
                  connectionId: "fb76ee36-3589-45c2-b5e3-11bae3b92e8e",
                },
                {
                  key: "<key>",
                  value: "<value>",
                  connectionId: "fb76ee36-3589-45c2-b5e3-11bae3b92e8e",
                },
              ],
            },
          ],
        },
      },
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
import { accessRulesUpdateAccessRule } from "opal-mcp/funcs/accessRulesUpdateAccessRule.js";

// Use `OpalMcpCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const opalMcp = new OpalMcpCore({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await accessRulesUpdateAccessRule(opalMcp, {
    accessRuleId: "1b978423-db0a-4037-a4cf-f79c60cb67b3",
    updateAccessRuleInfo: {
      name: "Platform Engineering",
      description: "This access rule represents all platform engineers in the company.",
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
                  connectionId: "fb76ee36-3589-45c2-b5e3-11bae3b92e8e",
                },
                {
                  key: "<key>",
                  value: "<value>",
                  connectionId: "fb76ee36-3589-45c2-b5e3-11bae3b92e8e",
                },
              ],
            },
            {
              selectors: [
                {
                  key: "<key>",
                  value: "<value>",
                  connectionId: "fb76ee36-3589-45c2-b5e3-11bae3b92e8e",
                },
                {
                  key: "<key>",
                  value: "<value>",
                  connectionId: "fb76ee36-3589-45c2-b5e3-11bae3b92e8e",
                },
              ],
            },
          ],
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accessRulesUpdateAccessRule failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateAccessRuleRequest](../../models/operations/updateaccessrulerequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.AccessRule](../../models/components/accessrule.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |