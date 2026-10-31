# RequestTemplateCustomFieldTypeEnum

The type of the custom request field. `CALLOUT` fields are display-only -- they show a message to the requester and collect no answer, so they never appear in a request's `custom_fields`.

## Example Usage

```typescript
import { RequestTemplateCustomFieldTypeEnum } from "opal-mcp/models/components";

let value: RequestTemplateCustomFieldTypeEnum = "LONG_TEXT";
```

## Values

```typescript
"SHORT_TEXT" | "LONG_TEXT" | "BOOLEAN" | "MULTI_CHOICE" | "MULTI_SELECT" | "CALLOUT"
```