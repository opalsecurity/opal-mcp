# Requests
(*requests*)

## Overview

Operations related to requests

### Available Operations

* [getRequests](#getrequests) - Get requests
* [createRequest](#createrequest) - Create an access request
* [~~getRequestsRelay~~](#getrequestsrelay) - Get requests via Relay :warning: **Deprecated**
* [getRequest](#getrequest) - Get request by ID
* [approveRequest](#approverequest) - Approve an access request
* [denyRequest](#denyrequest) - Deny an access request
* [getRequestComments](#getrequestcomments) - Returns a list of comments for a specific request.
* [createRequestComment](#createrequestcomment) - Comment on an access request

## getRequests

Returns a list of requests for your organization that is visible by the admin.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getRequests" method="get" path="/requests" -->
```typescript
import { OpalMcp } from "opal-mcp";

const opalMcp = new OpalMcp({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await opalMcp.requests.getRequests({
    startDateFilter: "2021-11-01T00:00:00Z",
    endDateFilter: "2021-11-12T00:00:00Z",
    requesterId: "37cb7e41-12ba-46da-92ff-030abe0450b1",
    targetUserId: "37cb7e41-12ba-46da-92ff-030abe0450b1",
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    pageSize: 200,
  });

  for await (const page of result) {
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OpalMcpCore } from "opal-mcp/core.js";
import { requestsGetRequests } from "opal-mcp/funcs/requestsGetRequests.js";

// Use `OpalMcpCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const opalMcp = new OpalMcpCore({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await requestsGetRequests(opalMcp, {
    startDateFilter: "2021-11-01T00:00:00Z",
    endDateFilter: "2021-11-12T00:00:00Z",
    requesterId: "37cb7e41-12ba-46da-92ff-030abe0450b1",
    targetUserId: "37cb7e41-12ba-46da-92ff-030abe0450b1",
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    pageSize: 200,
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("requestsGetRequests failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetRequestsRequest](../../models/operations/getrequestsrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetRequestsResponse](../../models/operations/getrequestsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## createRequest

Create an access request

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createRequest" method="post" path="/requests" -->
```typescript
import { OpalMcp } from "opal-mcp";

const opalMcp = new OpalMcp({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await opalMcp.requests.createRequest({
    resources: [],
    groups: [
      {
        id: "f454d283-ca87-4a8a-bdbb-df212eca5353",
        accessLevelRemoteId: "arn:aws:iam::490306337630:role/SupportUser",
        accessLevelName: "arn:aws:iam::490306337630:role/SupportUser",
      },
      {
        id: "f454d283-ca87-4a8a-bdbb-df212eca5353",
        accessLevelRemoteId: "arn:aws:iam::490306337630:role/SupportUser",
        accessLevelName: "arn:aws:iam::490306337630:role/SupportUser",
      },
      {
        id: "f454d283-ca87-4a8a-bdbb-df212eca5353",
        accessLevelRemoteId: "arn:aws:iam::490306337630:role/SupportUser",
        accessLevelName: "arn:aws:iam::490306337630:role/SupportUser",
      },
    ],
    targetUserId: "userd283-ca87-4a8a-bdbb-df212eca5353",
    targetGroupId: "userd283-ca87-4a8a-bdbb-df212eca5353",
    reason: "<value>",
    supportTicket: {
      ticketingProvider: "LINEAR",
      remoteId: "<id>",
      identifier: "<value>",
      url: "https://remarkable-smoke.net/",
    },
    durationMinutes: 931503,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OpalMcpCore } from "opal-mcp/core.js";
import { requestsCreateRequest } from "opal-mcp/funcs/requestsCreateRequest.js";

// Use `OpalMcpCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const opalMcp = new OpalMcpCore({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await requestsCreateRequest(opalMcp, {
    resources: [],
    groups: [
      {
        id: "f454d283-ca87-4a8a-bdbb-df212eca5353",
        accessLevelRemoteId: "arn:aws:iam::490306337630:role/SupportUser",
        accessLevelName: "arn:aws:iam::490306337630:role/SupportUser",
      },
      {
        id: "f454d283-ca87-4a8a-bdbb-df212eca5353",
        accessLevelRemoteId: "arn:aws:iam::490306337630:role/SupportUser",
        accessLevelName: "arn:aws:iam::490306337630:role/SupportUser",
      },
      {
        id: "f454d283-ca87-4a8a-bdbb-df212eca5353",
        accessLevelRemoteId: "arn:aws:iam::490306337630:role/SupportUser",
        accessLevelName: "arn:aws:iam::490306337630:role/SupportUser",
      },
    ],
    targetUserId: "userd283-ca87-4a8a-bdbb-df212eca5353",
    targetGroupId: "userd283-ca87-4a8a-bdbb-df212eca5353",
    reason: "<value>",
    supportTicket: {
      ticketingProvider: "LINEAR",
      remoteId: "<id>",
      identifier: "<value>",
      url: "https://remarkable-smoke.net/",
    },
    durationMinutes: 931503,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("requestsCreateRequest failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.CreateRequestInfo](../../models/components/createrequestinfo.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateRequestResponse](../../models/operations/createrequestresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## ~~getRequestsRelay~~

Returns a paginated list of requests using Relay-style cursor pagination.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getRequestsRelay" method="get" path="/requests/relay" -->
```typescript
import { OpalMcp } from "opal-mcp";

const opalMcp = new OpalMcp({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await opalMcp.requests.getRequestsRelay({
    first: 10,
    after: "Y3Vyc29yOnYyOpK5MjAyMS0wMS0wN1QwNzo0MToyNy4xMTlaFjYwZmM2YmJlZjk4YzE1N2ZhNjFhYjk4Nw==",
    last: 10,
    before: "Y3Vyc29yOnYyOpK5MjAyMS0wMS0wN1QwNzo0MToyNy4xMTlaFjYwZmM2YmJlZjk4YzE1N2ZhNjFhYjk4Nw==",
    status: "PENDING",
    to: "37cb7e41-12ba-46da-92ff-030abe0450b1",
    from: "37cb7e41-12ba-46da-92ff-030abe0450b1",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OpalMcpCore } from "opal-mcp/core.js";
import { requestsGetRequestsRelay } from "opal-mcp/funcs/requestsGetRequestsRelay.js";

// Use `OpalMcpCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const opalMcp = new OpalMcpCore({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await requestsGetRequestsRelay(opalMcp, {
    first: 10,
    after: "Y3Vyc29yOnYyOpK5MjAyMS0wMS0wN1QwNzo0MToyNy4xMTlaFjYwZmM2YmJlZjk4YzE1N2ZhNjFhYjk4Nw==",
    last: 10,
    before: "Y3Vyc29yOnYyOpK5MjAyMS0wMS0wN1QwNzo0MToyNy4xMTlaFjYwZmM2YmJlZjk4YzE1N2ZhNjFhYjk4Nw==",
    status: "PENDING",
    to: "37cb7e41-12ba-46da-92ff-030abe0450b1",
    from: "37cb7e41-12ba-46da-92ff-030abe0450b1",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("requestsGetRequestsRelay failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetRequestsRelayRequest](../../models/operations/getrequestsrelayrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.RequestConnection](../../models/components/requestconnection.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## getRequest

Returns a request by ID.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getRequest" method="get" path="/requests/{id}" -->
```typescript
import { OpalMcp } from "opal-mcp";

const opalMcp = new OpalMcp({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await opalMcp.requests.getRequest({
    id: "4baf8423-db0a-4037-a4cf-f79c60cb67a5",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OpalMcpCore } from "opal-mcp/core.js";
import { requestsGetRequest } from "opal-mcp/funcs/requestsGetRequest.js";

// Use `OpalMcpCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const opalMcp = new OpalMcpCore({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await requestsGetRequest(opalMcp, {
    id: "4baf8423-db0a-4037-a4cf-f79c60cb67a5",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("requestsGetRequest failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetRequestRequest](../../models/operations/getrequestrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.RequestT](../../models/components/requestt.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## approveRequest

Approve an access request

### Example Usage

<!-- UsageSnippet language="typescript" operationID="approveRequest" method="post" path="/requests/{id}/approve" -->
```typescript
import { OpalMcp } from "opal-mcp";

const opalMcp = new OpalMcp({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await opalMcp.requests.approveRequest({
    id: "5ee691eb-6bcb-4d2a-a747-6d792f2ebd23",
    requestBody: {
      level: "REGULAR",
      comment: "Approved after security review",
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
import { requestsApproveRequest } from "opal-mcp/funcs/requestsApproveRequest.js";

// Use `OpalMcpCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const opalMcp = new OpalMcpCore({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await requestsApproveRequest(opalMcp, {
    id: "5ee691eb-6bcb-4d2a-a747-6d792f2ebd23",
    requestBody: {
      level: "REGULAR",
      comment: "Approved after security review",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("requestsApproveRequest failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ApproveRequestRequest](../../models/operations/approverequestrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ApproveRequestResponse](../../models/operations/approverequestresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## denyRequest

Deny an access request

### Example Usage

<!-- UsageSnippet language="typescript" operationID="denyRequest" method="post" path="/requests/{id}/deny" -->
```typescript
import { OpalMcp } from "opal-mcp";

const opalMcp = new OpalMcp({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await opalMcp.requests.denyRequest({
    id: "83015915-58ae-4cce-b92d-608ff073ece1",
    requestBody: {
      comment: "Denied due to insufficient justification",
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
import { requestsDenyRequest } from "opal-mcp/funcs/requestsDenyRequest.js";

// Use `OpalMcpCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const opalMcp = new OpalMcpCore({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await requestsDenyRequest(opalMcp, {
    id: "83015915-58ae-4cce-b92d-608ff073ece1",
    requestBody: {
      comment: "Denied due to insufficient justification",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("requestsDenyRequest failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DenyRequestRequest](../../models/operations/denyrequestrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DenyRequestResponse](../../models/operations/denyrequestresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## getRequestComments

Returns a list of comments for a specific request.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getRequestComments" method="get" path="/requests/{id}/comments" -->
```typescript
import { OpalMcp } from "opal-mcp";

const opalMcp = new OpalMcp({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await opalMcp.requests.getRequestComments({
    id: "bfb1ef34-8ecf-46e5-bdf4-38abe7c6da89",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OpalMcpCore } from "opal-mcp/core.js";
import { requestsGetRequestComments } from "opal-mcp/funcs/requestsGetRequestComments.js";

// Use `OpalMcpCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const opalMcp = new OpalMcpCore({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await requestsGetRequestComments(opalMcp, {
    id: "bfb1ef34-8ecf-46e5-bdf4-38abe7c6da89",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("requestsGetRequestComments failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetRequestCommentsRequest](../../models/operations/getrequestcommentsrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.RequestCommentList](../../models/components/requestcommentlist.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## createRequestComment

Comment on an access request

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createRequestComment" method="post" path="/requests/{id}/comments" -->
```typescript
import { OpalMcp } from "opal-mcp";

const opalMcp = new OpalMcp({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await opalMcp.requests.createRequestComment({
    id: "4a929b40-a2e3-4dca-b8ec-1af35bdc7e43",
    requestBody: {
      comment: "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
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
import { requestsCreateRequestComment } from "opal-mcp/funcs/requestsCreateRequestComment.js";

// Use `OpalMcpCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const opalMcp = new OpalMcpCore({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await requestsCreateRequestComment(opalMcp, {
    id: "4a929b40-a2e3-4dca-b8ec-1af35bdc7e43",
    requestBody: {
      comment: "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("requestsCreateRequestComment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateRequestCommentRequest](../../models/operations/createrequestcommentrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateRequestCommentResponse](../../models/operations/createrequestcommentresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |