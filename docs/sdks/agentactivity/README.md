# AgentActivity

## Overview

Operations related to agent activity telemetry

### Available Operations

* [reportAgentActivity](#reportagentactivity) - Report agent activity
* [getAgentActivityClientSettings](#getagentactivityclientsettings) - Get agent activity client settings
* [reportMcpConfig](#reportmcpconfig) - Report MCP server configuration
* [anthropicInferenceHook](#anthropicinferencehook) - Anthropic inference hook verdict
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

## getAgentActivityClientSettings

**Prototype.** Returns how a client that reports agent activity (today, the Claude Code hook kit on a developer's machine) should send batched events for this organization: the minimum gap between two sends from one machine, the most events and bytes one request to `/agent-activity` may carry, the request rate to stay under, and how long the answer may be cached.

The rate is derived from the organization's own rate limit for `POST /agent-activity`, which every client in the organization shares: the clients that asked for these settings in the last cache period or two share half of it evenly, and the checks before tool calls keep the other half. A check before a tool call is not batched and should not be held back by this rate. A client is counted by its `X-Opal-Host` and `X-Opal-Actor` headers, so it should send the same ones it sends to `/agent-activity`.

A client should ask for these at most once per `cache_seconds`, and keep using its last answer, or its own defaults, when it cannot get one.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getAgentActivityClientSettings" method="get" path="/agent-activity/client-settings" -->
```typescript
import { OpalMcp } from "opal-mcp";

const opalMcp = new OpalMcp({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await opalMcp.agentActivity.getAgentActivityClientSettings();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OpalMcpCore } from "opal-mcp/core.js";
import { agentActivityGetAgentActivityClientSettings } from "opal-mcp/funcs/agentActivityGetAgentActivityClientSettings.js";

// Use `OpalMcpCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const opalMcp = new OpalMcpCore({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await agentActivityGetAgentActivityClientSettings(opalMcp);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentActivityGetAgentActivityClientSettings failed:", res.error);
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

**Promise\<[components.AgentActivityClientSettings](../../models/components/agentactivityclientsettings.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## reportMcpConfig

**Prototype.** Reports the MCP servers configured in Claude Code on one developer's machine, as the Opal hook kit read them: user-level and per-project servers in `~/.claude.json`, a project's `.mcp.json`, `managed-mcp.json`, and servers a plugin provides when they can be found.

For each server the kit sends its name, the scope it was configured in, its transport, and either its URL (`http`, `sse`) or a hash of its command's shape (`stdio`). It never sends environment values, headers or command arguments, which can hold secrets. Opal adds each server to the organization's MCP server registry and records that this person has it configured. Nothing on the machine is changed.

Like `/agent-activity`, this is **telemetry from cooperating machines**: the identity and the list are what the machine says. The bearer token establishes the organization and nothing finer.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="reportMcpConfig" method="post" path="/agent-activity/mcp-config" -->
```typescript
import { OpalMcp } from "opal-mcp";

const opalMcp = new OpalMcp({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await opalMcp.agentActivity.reportMcpConfig({
    mcpConfigReport: {
      servers: [
        {
          name: "<value>",
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
import { agentActivityReportMcpConfig } from "opal-mcp/funcs/agentActivityReportMcpConfig.js";

// Use `OpalMcpCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const opalMcp = new OpalMcpCore({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await agentActivityReportMcpConfig(opalMcp, {
    mcpConfigReport: {
      servers: [
        {
          name: "<value>",
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentActivityReportMcpConfig failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ReportMcpConfigRequest](../../models/operations/reportmcpconfigrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.McpConfigReportResult](../../models/components/mcpconfigreportresult.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## anthropicInferenceHook

**Prototype (AG-336).** The AI security server endpoint for Anthropic Inference hooks. Anthropic POSTs each governed frame here and waits for an allow or deny verdict. Configure it in claude.ai with this URL and a custom `Authorization: Bearer <Opal API key>` request header.

`tool_call` frames are evaluated against the organization's runtime policy rules. One verdict covers every tool call in the frame. Every other frame type, including `prompt`, is allowed without inspection. Any non-200 response is a webhook failure, so the organization's Anthropic failure-handling setting decides the outcome.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="anthropicInferenceHook" method="post" path="/inference-hooks/anthropic" -->
```typescript
import { OpalMcp } from "opal-mcp";

const opalMcp = new OpalMcp({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await opalMcp.agentActivity.anthropicInferenceHook({
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OpalMcpCore } from "opal-mcp/core.js";
import { agentActivityAnthropicInferenceHook } from "opal-mcp/funcs/agentActivityAnthropicInferenceHook.js";

// Use `OpalMcpCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const opalMcp = new OpalMcpCore({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await agentActivityAnthropicInferenceHook(opalMcp, {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentActivityAnthropicInferenceHook failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [{ [k: string]: any }](../../models/.md)                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.AnthropicInferenceHookVerdict](../../models/components/anthropicinferencehookverdict.md)\>**

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