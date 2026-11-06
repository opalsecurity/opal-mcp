# ~~CreateAppInfoImportVisibility~~

The visibility of imported items. Defaults to `GLOBAL` when omitted.
Deprecated in favor of `PUT /v1/apps/{app_id}/visibility`.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

## Example Usage

```typescript
import { CreateAppInfoImportVisibility } from "opal-mcp/models/components";

let value: CreateAppInfoImportVisibility = "GLOBAL";
```

## Values

```typescript
"GLOBAL" | "LIMITED"
```