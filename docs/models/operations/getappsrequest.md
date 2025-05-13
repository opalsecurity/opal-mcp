# GetAppsRequest

## Example Usage

```typescript
import { GetAppsRequest } from "opal-mcp/models/operations";

let value: GetAppsRequest = {
  appTypeFilter: [
    "OKTA_DIRECTORY",
    "GIT_HUB",
  ],
  ownerFilter: "29827fb8-f2dd-4e80-9576-28e31e9934ac",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `appTypeFilter`                                                    | [components.AppTypeEnum](../../models/components/apptypeenum.md)[] | :heavy_minus_sign:                                                 | A list of app types to filter by.                                  | [<br/>"OKTA_DIRECTORY",<br/>"GIT_HUB"<br/>]                        |
| `ownerFilter`                                                      | *string*                                                           | :heavy_minus_sign:                                                 | An owner ID to filter by.                                          | 29827fb8-f2dd-4e80-9576-28e31e9934ac                               |