# OpenaiPlatformServiceAccount

Remote info for OpenAI Platform service account.

## Example Usage

```typescript
import { OpenaiPlatformServiceAccount } from "opal-mcp/models/components";

let value: OpenaiPlatformServiceAccount = {
  projectId: "proj_abc",
  serviceAccountId: "svc_acct_abc",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    | Example                                        |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `projectId`                                    | *string*                                       | :heavy_check_mark:                             | The id of the project for the service account. | proj_abc                                       |
| `serviceAccountId`                             | *string*                                       | :heavy_check_mark:                             | The id of the service account.                 | svc_acct_abc                                   |