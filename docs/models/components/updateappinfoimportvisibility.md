# ~~UpdateAppInfoImportVisibility~~

Deprecated in favor of `PUT /v1/apps/{app_id}/visibility`.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

## Example Usage

```typescript
import { UpdateAppInfoImportVisibility } from "opal-mcp/models/components";

let value: UpdateAppInfoImportVisibility = "GLOBAL";
```

## Values

```typescript
"GLOBAL" | "LIMITED"
```