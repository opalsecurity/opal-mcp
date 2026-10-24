# AgentActivity

## Overview

Operations related to agent activity telemetry

### Available Operations

* [reportAgentActivity](#reportagentactivity) - Report agent activity
* [getAgentKillSwitch](#getagentkillswitch) - Get the agent kill switch
* [setAgentKillSwitch](#setagentkillswitch) - Set the agent kill switch

## reportAgentActivity

**Prototype (AG-285).** Reports activity observed by an agent runtime on a developer's machine - today, Claude Code hook events.

This is **telemetry from cooperating machines, not attestation**. Opal can only see what a configured, consenting client chooses to send, cannot verify that a fleet is configured at all, and has no way to detect a machine that is reporting nothing. Absence of activity for an agent therefore means "nothing was reported", never "the agent did nothing".

The request body is either a batch envelope (`{"events": [...]}`), a bare JSON array of events, or a single raw Claude Code hook payload - the last so a hook can POST here directly with no relay in between.

The bearer token establishes the **organization** and nothing finer. No field in the payload is treated as an identity claim Opal trusts: the actor headers below are used for best-effort attribution and display only. Events that cannot be attributed to an agent are retained and surfaced as unattributed activity rather than dropped.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="reportAgentActivity" method="post" path="/agent-activity" -->
```typescript
import { OpalMcp } from "opal-mcp";

const opalMcp = new OpalMcp({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await opalMcp.agentActivity.reportAgentActivity({
    agentActivityIngestRequest: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OpalMcpCore } from "opal-mcp/core.js";
import { agentActivityReportAgentActivity } from "opal-mcp/funcs/agentActivityReportAgentActivity.js";

// Use `OpalMcpCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const opalMcp = new OpalMcpCore({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await agentActivityReportAgentActivity(opalMcp, {
    agentActivityIngestRequest: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentActivityReportAgentActivity failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ReportAgentActivityRequest](../../models/operations/reportagentactivityrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.AgentActivityIngestResult](../../models/components/agentactivityingestresult.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## getAgentKillSwitch

**Prototype (AG-297).** Returns whether agent tool calls are currently being denied for this organization, and the activation that is in force or that last was.

`active` is evaluated against the clock on every read, so an activation past its `expires_at` reads as inactive without anything having swept it.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getAgentKillSwitch" method="get" path="/agent-kill-switch" -->
```typescript
import { OpalMcp } from "opal-mcp";

const opalMcp = new OpalMcp({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await opalMcp.agentActivity.getAgentKillSwitch();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OpalMcpCore } from "opal-mcp/core.js";
import { agentActivityGetAgentKillSwitch } from "opal-mcp/funcs/agentActivityGetAgentKillSwitch.js";

// Use `OpalMcpCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const opalMcp = new OpalMcpCore({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await agentActivityGetAgentKillSwitch(opalMcp);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentActivityGetAgentKillSwitch failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.AgentKillSwitch](../../models/components/agentkillswitch.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## setAgentKillSwitch

**Prototype (AG-297).** Turns the org-level agent kill switch on or off. Admin only.

While it is on, Opal answers every `PreToolUse` hook POST to `/agent-activity` with a `deny` decision, so a cooperating Claude Code client stops running tools.

**It is not a security boundary, and it fails open.** It reaches only clients that are configured to POST to `/agent-activity` and that honour the answer; a client on a non-default base URL, an older build, or with no hook deployed is unaffected. If Opal is unreachable or slow the tool call proceeds, because Claude Code treats a failed `PreToolUse` hook as a non-blocking error by design.

Activation is always time-bound: `duration_minutes` is capped, and an activation that reaches `expires_at` stops denying on its own.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="setAgentKillSwitch" method="put" path="/agent-kill-switch" -->
```typescript
import { OpalMcp } from "opal-mcp";

const opalMcp = new OpalMcp({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await opalMcp.agentActivity.setAgentKillSwitch({
    active: false,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OpalMcpCore } from "opal-mcp/core.js";
import { agentActivitySetAgentKillSwitch } from "opal-mcp/funcs/agentActivitySetAgentKillSwitch.js";

// Use `OpalMcpCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const opalMcp = new OpalMcpCore({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await agentActivitySetAgentKillSwitch(opalMcp, {
    active: false,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentActivitySetAgentKillSwitch failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.SetAgentKillSwitchRequest](../../models/components/setagentkillswitchrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.AgentKillSwitch](../../models/components/agentkillswitch.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |