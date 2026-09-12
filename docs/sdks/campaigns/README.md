# Campaigns

## Overview

Operations related to access review campaigns

### Available Operations

* [getCampaigns](#getcampaigns) - Returns a list of `Campaign` objects.
* [createCampaign](#createcampaign) - Creates a campaign. Campaign scope only supports direct access edges:
`configuration.query.edgeFilter.directOnly` defaults to `true`, is
always stored as `true`, and passing `false` returns 400.

* [getCampaign](#getcampaign) - Get campaign by ID
* [updateCampaign](#updatecampaign) - Update campaign
* [startCampaign](#startcampaign) - Start campaign
* [stopCampaign](#stopcampaign) - Stop campaign
* [endCampaign](#endcampaign) - End campaign
* [getCampaignItems](#getcampaignitems) - List campaign items
* [getCampaignViewerItems](#getcampaignvieweritems) - List viewer campaign items

## getCampaigns

Returns a list of `Campaign` objects.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getCampaigns" method="get" path="/campaigns" -->
```typescript
import { OpalMcp } from "opal-mcp";

const opalMcp = new OpalMcp({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await opalMcp.campaigns.getCampaigns({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    pageSize: 200,
    name: "Q3 Access Review",
    status: "ONGOING",
    createdAtAfter: new Date("2026-01-01T00:00:00Z"),
    createdAtBefore: new Date("2026-12-31T23:59:59Z"),
    startedAtAfter: new Date("2026-01-01T00:00:00Z"),
    startedAtBefore: new Date("2026-12-31T23:59:59Z"),
    endedAtAfter: new Date("2026-01-01T00:00:00Z"),
    endedAtBefore: new Date("2026-12-31T23:59:59Z"),
    stoppedAtAfter: new Date("2026-01-01T00:00:00Z"),
    stoppedAtBefore: new Date("2026-12-31T23:59:59Z"),
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OpalMcpCore } from "opal-mcp/core.js";
import { campaignsGetCampaigns } from "opal-mcp/funcs/campaignsGetCampaigns.js";

// Use `OpalMcpCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const opalMcp = new OpalMcpCore({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await campaignsGetCampaigns(opalMcp, {
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    pageSize: 200,
    name: "Q3 Access Review",
    status: "ONGOING",
    createdAtAfter: new Date("2026-01-01T00:00:00Z"),
    createdAtBefore: new Date("2026-12-31T23:59:59Z"),
    startedAtAfter: new Date("2026-01-01T00:00:00Z"),
    startedAtBefore: new Date("2026-12-31T23:59:59Z"),
    endedAtAfter: new Date("2026-01-01T00:00:00Z"),
    endedAtBefore: new Date("2026-12-31T23:59:59Z"),
    stoppedAtAfter: new Date("2026-01-01T00:00:00Z"),
    stoppedAtBefore: new Date("2026-12-31T23:59:59Z"),
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("campaignsGetCampaigns failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCampaignsRequest](../../models/operations/getcampaignsrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.PaginatedCampaignsList](../../models/components/paginatedcampaignslist.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## createCampaign

Creates a campaign. Campaign scope only supports direct access edges:
`configuration.query.edgeFilter.directOnly` defaults to `true`, is
always stored as `true`, and passing `false` returns 400.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="createCampaign" method="post" path="/campaigns" -->
```typescript
import { OpalMcp } from "opal-mcp";

const opalMcp = new OpalMcp({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await opalMcp.campaigns.createCampaign({
    name: "Q3 Access Review",
    configuration: {
      query: {
        principalFilter: {
          entityTypes: [
            "USER",
          ],
        },
      },
      endDate: new Date("2026-09-30T00:00:00Z"),
      timezone: "America/Los_Angeles",
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
import { campaignsCreateCampaign } from "opal-mcp/funcs/campaignsCreateCampaign.js";

// Use `OpalMcpCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const opalMcp = new OpalMcpCore({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await campaignsCreateCampaign(opalMcp, {
    name: "Q3 Access Review",
    configuration: {
      query: {
        principalFilter: {
          entityTypes: [
            "USER",
          ],
        },
      },
      endDate: new Date("2026-09-30T00:00:00Z"),
      timezone: "America/Los_Angeles",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("campaignsCreateCampaign failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.CreateCampaignInfo](../../models/components/createcampaigninfo.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Campaign](../../models/components/campaign.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## getCampaign

Returns a `Campaign` object.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getCampaign" method="get" path="/campaigns/{campaign_id}" -->
```typescript
import { OpalMcp } from "opal-mcp";

const opalMcp = new OpalMcp({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await opalMcp.campaigns.getCampaign({
    campaignId: "f454d283-ca87-4a8a-bdbb-df212eca5353",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OpalMcpCore } from "opal-mcp/core.js";
import { campaignsGetCampaign } from "opal-mcp/funcs/campaignsGetCampaign.js";

// Use `OpalMcpCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const opalMcp = new OpalMcpCore({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await campaignsGetCampaign(opalMcp, {
    campaignId: "f454d283-ca87-4a8a-bdbb-df212eca5353",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("campaignsGetCampaign failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCampaignRequest](../../models/operations/getcampaignrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Campaign](../../models/components/campaign.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## updateCampaign

Partially updates a campaign. Omitted fields are left unchanged.
`configuration.query` and `configuration.reviewer_assignment_policy`
cannot be updated after create; including either field returns 400.
`configuration.cron_expression` and
`configuration.recurring_duration_days` may only be set on template
campaigns; setting them on a one-off campaign returns 400.
`configuration.is_template` is immutable and not accepted on update.
Configuration updates on a stopped or ended (non-template) campaign
return 400. Name-only updates are still allowed.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateCampaign" method="put" path="/campaigns/{campaign_id}" -->
```typescript
import { OpalMcp } from "opal-mcp";

const opalMcp = new OpalMcp({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await opalMcp.campaigns.updateCampaign({
    campaignId: "f454d283-ca87-4a8a-bdbb-df212eca5353",
    updateCampaignInfo: {
      name: "Q3 Access Review (Updated)",
      configuration: {
        endDate: new Date("2026-09-30T00:00:00Z"),
        timezone: "America/Los_Angeles",
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
import { campaignsUpdateCampaign } from "opal-mcp/funcs/campaignsUpdateCampaign.js";

// Use `OpalMcpCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const opalMcp = new OpalMcpCore({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await campaignsUpdateCampaign(opalMcp, {
    campaignId: "f454d283-ca87-4a8a-bdbb-df212eca5353",
    updateCampaignInfo: {
      name: "Q3 Access Review (Updated)",
      configuration: {
        endDate: new Date("2026-09-30T00:00:00Z"),
        timezone: "America/Los_Angeles",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("campaignsUpdateCampaign failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateCampaignRequest](../../models/operations/updatecampaignrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Campaign](../../models/components/campaign.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## startCampaign

Starts a draft campaign immediately, setting `started_at` and
`started_by_user_id`. Returns 400 if the campaign is not in draft
state, or if it is a recurring template (`is_template: true`) —
templates spawn draft campaigns on their schedule and cannot be
started directly.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="startCampaign" method="post" path="/campaigns/{campaign_id}/start" -->
```typescript
import { OpalMcp } from "opal-mcp";

const opalMcp = new OpalMcp({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await opalMcp.campaigns.startCampaign({
    campaignId: "f454d283-ca87-4a8a-bdbb-df212eca5353",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OpalMcpCore } from "opal-mcp/core.js";
import { campaignsStartCampaign } from "opal-mcp/funcs/campaignsStartCampaign.js";

// Use `OpalMcpCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const opalMcp = new OpalMcpCore({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await campaignsStartCampaign(opalMcp, {
    campaignId: "f454d283-ca87-4a8a-bdbb-df212eca5353",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("campaignsStartCampaign failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.StartCampaignRequest](../../models/operations/startcampaignrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Campaign](../../models/components/campaign.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## stopCampaign

Stops an ongoing campaign immediately, setting `stopped_at` and
`stopped_by_user_id`. Returns 400 if the campaign has not started or
has already stopped.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="stopCampaign" method="post" path="/campaigns/{campaign_id}/stop" -->
```typescript
import { OpalMcp } from "opal-mcp";

const opalMcp = new OpalMcp({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await opalMcp.campaigns.stopCampaign({
    campaignId: "f454d283-ca87-4a8a-bdbb-df212eca5353",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OpalMcpCore } from "opal-mcp/core.js";
import { campaignsStopCampaign } from "opal-mcp/funcs/campaignsStopCampaign.js";

// Use `OpalMcpCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const opalMcp = new OpalMcpCore({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await campaignsStopCampaign(opalMcp, {
    campaignId: "f454d283-ca87-4a8a-bdbb-df212eca5353",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("campaignsStopCampaign failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.StopCampaignRequest](../../models/operations/stopcampaignrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Campaign](../../models/components/campaign.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## endCampaign

Ends a stopped campaign, setting `ended_at` and `ended_by_user_id`,
applying pending access changes, and queuing report generation.
Returns 400 unless the campaign is started and stopped and not already
ended.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="endCampaign" method="post" path="/campaigns/{campaign_id}/end" -->
```typescript
import { OpalMcp } from "opal-mcp";

const opalMcp = new OpalMcp({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await opalMcp.campaigns.endCampaign({
    campaignId: "f454d283-ca87-4a8a-bdbb-df212eca5353",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OpalMcpCore } from "opal-mcp/core.js";
import { campaignsEndCampaign } from "opal-mcp/funcs/campaignsEndCampaign.js";

// Use `OpalMcpCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const opalMcp = new OpalMcpCore({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await campaignsEndCampaign(opalMcp, {
    campaignId: "f454d283-ca87-4a8a-bdbb-df212eca5353",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("campaignsEndCampaign failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.EndCampaignRequest](../../models/operations/endcampaignrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Campaign](../../models/components/campaign.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## getCampaignItems

Returns a paginated list of review items for a campaign — the same rows
shown on the admin Reviews tab. Status is derived using the same rules
as the UI Status column. Soft-deleted role assignments are still
returned with `is_target_deleted: true`.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getCampaignItems" method="get" path="/campaigns/{campaign_id}/items" -->
```typescript
import { OpalMcp } from "opal-mcp";

const opalMcp = new OpalMcp({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await opalMcp.campaigns.getCampaignItems({
    campaignId: "f454d283-ca87-4a8a-bdbb-df212eca5353",
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    pageSize: 200,
    statuses: [
      "PENDING",
    ],
    reviewerUserId: "32acc112-21ff-4669-91c2-21e27683eaa1",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OpalMcpCore } from "opal-mcp/core.js";
import { campaignsGetCampaignItems } from "opal-mcp/funcs/campaignsGetCampaignItems.js";

// Use `OpalMcpCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const opalMcp = new OpalMcpCore({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await campaignsGetCampaignItems(opalMcp, {
    campaignId: "f454d283-ca87-4a8a-bdbb-df212eca5353",
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    pageSize: 200,
    statuses: [
      "PENDING",
    ],
    reviewerUserId: "32acc112-21ff-4669-91c2-21e27683eaa1",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("campaignsGetCampaignItems failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCampaignItemsRequest](../../models/operations/getcampaignitemsrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.PaginatedCampaignItemsList](../../models/components/paginatedcampaignitemslist.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## getCampaignViewerItems

Returns a paginated list of campaign review items assigned to the
current authenticated viewer. Matches GraphQL `Campaign.viewerItems`.

Campaign access matches `GET /campaigns/{campaign_id}` and GraphQL
`campaign(id)`: the caller must have access-review read permission or
be a reviewer on the campaign. Otherwise the request fails with 403
(same as get-by-id). Item rows are still scoped to the caller's own
reviews (empty page when the caller is an admin but not a reviewer).


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getCampaignViewerItems" method="get" path="/campaigns/{campaign_id}/viewer-items" -->
```typescript
import { OpalMcp } from "opal-mcp";

const opalMcp = new OpalMcp({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await opalMcp.campaigns.getCampaignViewerItems({
    campaignId: "f454d283-ca87-4a8a-bdbb-df212eca5353",
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    pageSize: 200,
    sortField: "PRINCIPAL_NAME",
    sortDirection: "ASC",
    statuses: [
      "PENDING",
    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OpalMcpCore } from "opal-mcp/core.js";
import { campaignsGetCampaignViewerItems } from "opal-mcp/funcs/campaignsGetCampaignViewerItems.js";

// Use `OpalMcpCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const opalMcp = new OpalMcpCore({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await campaignsGetCampaignViewerItems(opalMcp, {
    campaignId: "f454d283-ca87-4a8a-bdbb-df212eca5353",
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    pageSize: 200,
    sortField: "PRINCIPAL_NAME",
    sortDirection: "ASC",
    statuses: [
      "PENDING",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("campaignsGetCampaignViewerItems failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCampaignViewerItemsRequest](../../models/operations/getcampaignvieweritemsrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.PaginatedViewerCampaignItemsList](../../models/components/paginatedviewercampaignitemslist.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |