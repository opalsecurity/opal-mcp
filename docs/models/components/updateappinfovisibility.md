# ~~UpdateAppInfoVisibility~~

Deprecated in favor of `PUT /v1/apps/{app_id}/visibility`: manage
an app's visibility through the sub-endpoint instead of inline on
update. Still fully functional and validated on this surface.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

## Example Usage

```typescript
import { UpdateAppInfoVisibility } from "opal-mcp/models/components";

let value: UpdateAppInfoVisibility = "GLOBAL";
```

## Values

```typescript
"GLOBAL" | "LIMITED"
```