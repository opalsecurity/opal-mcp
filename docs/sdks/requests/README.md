# Requests
(*requests*)

## Overview

### Available Operations

* [getRequests](#getrequests) - Returns a list of requests for your organization that is visible by the admin.
* [createRequest](#createrequest) - Create an access request
* [getRequestsRelay](#getrequestsrelay) - Returns a paginated list of requests using Relay-style cursor pagination.
* [approveRequest](#approverequest) - Approve an access request

## getRequests

Returns a list of requests for your organization that is visible by the admin.

### Example Usage

```typescript
import { OpalMcp } from "opal-mcp";

const opalMcp = new OpalMcp({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await opalMcp.requests.getRequests({
    startDateFilter: "2021-11-01T00:00:00Z",
    endDateFilter: "2021-11-12T00:00:00Z",
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    pageSize: 200,
  });

  // Handle the result
  console.log(result);
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
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    pageSize: 200,
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
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

**Promise\<[components.RequestList](../../models/components/requestlist.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## createRequest

Create an access request

### Example Usage

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

  // Handle the result
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

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
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

## getRequestsRelay

Returns a paginated list of requests using Relay-style cursor pagination.

### Example Usage

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

  // Handle the result
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

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
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

## approveRequest

Approve an access request

### Example Usage

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

  // Handle the result
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

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
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