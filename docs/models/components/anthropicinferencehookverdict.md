# AnthropicInferenceHookVerdict

# AnthropicInferenceHookVerdict Object
### Description
An Anthropic Inference hooks verdict. `deny_reason` is shown to the end user on a deny.

## Example Usage

```typescript
import { AnthropicInferenceHookVerdict } from "opal-mcp/models/components";

let value: AnthropicInferenceHookVerdict = {
  action: "allow",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `action`                                               | [components.Action](../../models/components/action.md) | :heavy_check_mark:                                     | N/A                                                    |
| `denyReason`                                           | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `referenceId`                                          | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    |