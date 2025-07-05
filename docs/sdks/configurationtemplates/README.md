# ConfigurationTemplates
(*configurationTemplates*)

## Overview

Operations related to configuration templates

### Available Operations

* [getConfigurationTemplates](#getconfigurationtemplates) - Returns a list of `ConfigurationTemplate` objects.
* [createConfigurationTemplate](#createconfigurationtemplate) - Creates a configuration template.
* [updateConfigurationTemplate](#updateconfigurationtemplate) - Update a configuration template.
* [deleteConfigurationTemplate](#deleteconfigurationtemplate) - Deletes a configuration template.

## getConfigurationTemplates

Returns a list of `ConfigurationTemplate` objects.

### Example Usage

```typescript
import { OpalMcp } from "opal-mcp";

const opalMcp = new OpalMcp({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await opalMcp.configurationTemplates.getConfigurationTemplates();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OpalMcpCore } from "opal-mcp/core.js";
import { configurationTemplatesGetConfigurationTemplates } from "opal-mcp/funcs/configurationTemplatesGetConfigurationTemplates.js";

// Use `OpalMcpCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const opalMcp = new OpalMcpCore({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await configurationTemplatesGetConfigurationTemplates(opalMcp);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("configurationTemplatesGetConfigurationTemplates failed:", res.error);
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

**Promise\<[components.PaginatedConfigurationTemplateList](../../models/components/paginatedconfigurationtemplatelist.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## createConfigurationTemplate

Creates a configuration template.

### Example Usage

```typescript
import { OpalMcp } from "opal-mcp";

const opalMcp = new OpalMcp({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await opalMcp.configurationTemplates.createConfigurationTemplate({
    adminOwnerId: "7c86c85d-0651-43e2-a748-d69d658418e8",
    visibility: {
      visibility: "GLOBAL",
    },
    linkedAuditMessageChannelIds: [
      "37cb7e41-12ba-46da-92ff-030abe0450b1",
      "37cb7e41-12ba-46da-92ff-030abe0450b2",
    ],
    memberOncallScheduleIds: [
      "37cb7e41-12ba-46da-92ff-030abe0450b1",
      "37cb7e41-12ba-46da-92ff-030abe0450b2",
    ],
    breakGlassUserIds: [
      "37cb7e41-12ba-46da-92ff-030abe0450b1",
      "37cb7e41-12ba-46da-92ff-030abe0450b2",
    ],
    requireMfaToApprove: false,
    requireMfaToConnect: false,
    name: "Prod AWS Template",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OpalMcpCore } from "opal-mcp/core.js";
import { configurationTemplatesCreateConfigurationTemplate } from "opal-mcp/funcs/configurationTemplatesCreateConfigurationTemplate.js";

// Use `OpalMcpCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const opalMcp = new OpalMcpCore({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await configurationTemplatesCreateConfigurationTemplate(opalMcp, {
    adminOwnerId: "7c86c85d-0651-43e2-a748-d69d658418e8",
    visibility: {
      visibility: "GLOBAL",
    },
    linkedAuditMessageChannelIds: [
      "37cb7e41-12ba-46da-92ff-030abe0450b1",
      "37cb7e41-12ba-46da-92ff-030abe0450b2",
    ],
    memberOncallScheduleIds: [
      "37cb7e41-12ba-46da-92ff-030abe0450b1",
      "37cb7e41-12ba-46da-92ff-030abe0450b2",
    ],
    breakGlassUserIds: [
      "37cb7e41-12ba-46da-92ff-030abe0450b1",
      "37cb7e41-12ba-46da-92ff-030abe0450b2",
    ],
    requireMfaToApprove: false,
    requireMfaToConnect: false,
    name: "Prod AWS Template",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("configurationTemplatesCreateConfigurationTemplate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.CreateConfigurationTemplateInfo](../../models/components/createconfigurationtemplateinfo.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ConfigurationTemplate](../../models/components/configurationtemplate.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## updateConfigurationTemplate

Update a configuration template.

### Example Usage

```typescript
import { OpalMcp } from "opal-mcp";

const opalMcp = new OpalMcp({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await opalMcp.configurationTemplates.updateConfigurationTemplate({
    configurationTemplateId: "7c86c85d-0651-43e2-a748-d69d658418e8",
    name: "Prod AWS Template",
    adminOwnerId: "7c86c85d-0651-43e2-a748-d69d658418e8",
    visibility: {
      visibility: "GLOBAL",
    },
    linkedAuditMessageChannelIds: [
      "37cb7e41-12ba-46da-92ff-030abe0450b1",
      "37cb7e41-12ba-46da-92ff-030abe0450b2",
    ],
    memberOncallScheduleIds: [
      "37cb7e41-12ba-46da-92ff-030abe0450b1",
      "37cb7e41-12ba-46da-92ff-030abe0450b2",
    ],
    breakGlassUserIds: [
      "37cb7e41-12ba-46da-92ff-030abe0450b1",
      "37cb7e41-12ba-46da-92ff-030abe0450b2",
    ],
    requireMfaToApprove: false,
    requireMfaToConnect: false,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OpalMcpCore } from "opal-mcp/core.js";
import { configurationTemplatesUpdateConfigurationTemplate } from "opal-mcp/funcs/configurationTemplatesUpdateConfigurationTemplate.js";

// Use `OpalMcpCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const opalMcp = new OpalMcpCore({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await configurationTemplatesUpdateConfigurationTemplate(opalMcp, {
    configurationTemplateId: "7c86c85d-0651-43e2-a748-d69d658418e8",
    name: "Prod AWS Template",
    adminOwnerId: "7c86c85d-0651-43e2-a748-d69d658418e8",
    visibility: {
      visibility: "GLOBAL",
    },
    linkedAuditMessageChannelIds: [
      "37cb7e41-12ba-46da-92ff-030abe0450b1",
      "37cb7e41-12ba-46da-92ff-030abe0450b2",
    ],
    memberOncallScheduleIds: [
      "37cb7e41-12ba-46da-92ff-030abe0450b1",
      "37cb7e41-12ba-46da-92ff-030abe0450b2",
    ],
    breakGlassUserIds: [
      "37cb7e41-12ba-46da-92ff-030abe0450b1",
      "37cb7e41-12ba-46da-92ff-030abe0450b2",
    ],
    requireMfaToApprove: false,
    requireMfaToConnect: false,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("configurationTemplatesUpdateConfigurationTemplate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.UpdateConfigurationTemplateInfo](../../models/components/updateconfigurationtemplateinfo.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ConfigurationTemplate](../../models/components/configurationtemplate.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## deleteConfigurationTemplate

Deletes a configuration template.

### Example Usage

```typescript
import { OpalMcp } from "opal-mcp";

const opalMcp = new OpalMcp({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  await opalMcp.configurationTemplates.deleteConfigurationTemplate({
    configurationTemplateId: "4baf8423-db0a-4037-a4cf-f79c60cb67a5",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OpalMcpCore } from "opal-mcp/core.js";
import { configurationTemplatesDeleteConfigurationTemplate } from "opal-mcp/funcs/configurationTemplatesDeleteConfigurationTemplate.js";

// Use `OpalMcpCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const opalMcp = new OpalMcpCore({
  bearerAuth: process.env["OPALMCP_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await configurationTemplatesDeleteConfigurationTemplate(opalMcp, {
    configurationTemplateId: "4baf8423-db0a-4037-a4cf-f79c60cb67a5",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("configurationTemplatesDeleteConfigurationTemplate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteConfigurationTemplateRequest](../../models/operations/deleteconfigurationtemplaterequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |