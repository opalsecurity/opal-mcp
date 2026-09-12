# OpalQueries

## Overview

Operations related to OpalQuery

### Available Operations

* [runOpalQuery](#runopalquery) - Run an ad-hoc OpalQuery

## runOpalQuery

Executes an ad-hoc OpalQuery and returns paginated results. Two query types are supported: a **Node** query filters and returns entities (users, resources, or groups); an **Access Path** query returns the access edges between principals and their entitlements. Set `type` to `NODE` or `ACCESS_PATH` in the request body to select the query type.

This endpoint is available to OpalQuery beta participants. To request access, contact Opal support.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="runOpalQuery" method="post" path="/queries/run" -->
```typescript
import { OpalMcp } from "opal-mcp";

const opalMcp = new OpalMcp({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await opalMcp.opalQueries.runOpalQuery({
    type: "NODE",
    query: {
      nodeFilters: {
        entityTypes: [
          "RESOURCE",
        ],
        entityTag: {
          key: "env",
          value: "prod",
        },
      },
      accessFilters: {
        isAccessibleBy: {
          entityTypes: [
            "USER",
          ],
          entityTag: {
            key: "contractor",
          },
        },
      },
    },
    first: 50,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OpalMcpCore } from "opal-mcp/core.js";
import { opalQueriesRunOpalQuery } from "opal-mcp/funcs/opalQueriesRunOpalQuery.js";

// Use `OpalMcpCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const opalMcp = new OpalMcpCore({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await opalQueriesRunOpalQuery(opalMcp, {
    type: "NODE",
    query: {
      nodeFilters: {
        entityTypes: [
          "RESOURCE",
        ],
        entityTag: {
          key: "env",
          value: "prod",
        },
      },
      accessFilters: {
        isAccessibleBy: {
          entityTypes: [
            "USER",
          ],
          entityTag: {
            key: "contractor",
          },
        },
      },
    },
    first: 50,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("opalQueriesRunOpalQuery failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.RunOpalQueryRequest](../../models/components/runopalqueryrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.OpalQueryResults](../../models/components/opalqueryresults.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |