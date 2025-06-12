# Events
(*events*)

## Overview

### Available Operations

* [events](#events) - Returns a list of `Event` objects.

## events

Returns a list of `Event` objects.

### Example Usage

```typescript
import { OpalMcp } from "opal-mcp";

const opalMcp = new OpalMcp({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await opalMcp.events.events({
    startDateFilter: "2021-11-01T00:00:00Z",
    endDateFilter: "2021-11-12T00:00:00Z",
    actorFilter: "29827fb8-f2dd-4e80-9576-28e31e9934ac",
    objectFilter: "29827fb8-f2dd-4e80-9576-28e31e9934ac",
    eventTypeFilter: "USER_MFA_RESET",
    apiTokenFilter: "fullaccess:**************************M_g==",
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
import { eventsEvents } from "opal-mcp/funcs/eventsEvents.js";

// Use `OpalMcpCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const opalMcp = new OpalMcpCore({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await eventsEvents(opalMcp, {
    startDateFilter: "2021-11-01T00:00:00Z",
    endDateFilter: "2021-11-12T00:00:00Z",
    actorFilter: "29827fb8-f2dd-4e80-9576-28e31e9934ac",
    objectFilter: "29827fb8-f2dd-4e80-9576-28e31e9934ac",
    eventTypeFilter: "USER_MFA_RESET",
    apiTokenFilter: "fullaccess:**************************M_g==",
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    pageSize: 200,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventsEvents failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.EventsRequest](../../models/operations/eventsrequest.md)                                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.PaginatedEventList](../../models/components/paginatedeventlist.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |