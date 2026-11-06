# ~~CreateAppInfoVisibility~~

The visibility of the app. Defaults to `GLOBAL` when omitted.
Deprecated in favor of `PUT /v1/apps/{app_id}/visibility`: set
visibility after creation via the sub-endpoint instead of on
create. Still fully functional and validated on this surface.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

## Example Usage

```typescript
import { CreateAppInfoVisibility } from "opal-mcp/models/components";

let value: CreateAppInfoVisibility = "GLOBAL";
```

## Values

```typescript
"GLOBAL" | "LIMITED"
```