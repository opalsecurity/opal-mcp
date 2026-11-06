# AppVisibilityInfo

Visibility information for an app. Mirrors `VisibilityInfo` but adds
the App-specific `import_visibility`, which governs the default
visibility of items imported from the app.

## Example Usage

```typescript
import { AppVisibilityInfo } from "opal-mcp/models/components";

let value: AppVisibilityInfo = {
  visibility: "LIMITED",
  visibilityGroupIds: [
    "7870617d-e72a-47f5-a84c-693817ab4567",
    "1520617d-e72a-47f5-a84c-693817ab48ad",
  ],
  importVisibility: "LIMITED",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      | Example                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `visibility`                                                                                                     | [components.VisibilityTypeEnum](../../models/components/visibilitytypeenum.md)                                   | :heavy_check_mark:                                                                                               | The visibility level of the entity.                                                                              | GLOBAL                                                                                                           |
| `visibilityGroupIds`                                                                                             | *string*[]                                                                                                       | :heavy_minus_sign:                                                                                               | The IDs of groups that can see this app when visibility is `LIMITED`.<br/>Must be empty when visibility is `GLOBAL`. |                                                                                                                  |
| `importVisibility`                                                                                               | [components.VisibilityTypeEnum](../../models/components/visibilitytypeenum.md)                                   | :heavy_minus_sign:                                                                                               | The visibility level of the entity.                                                                              | GLOBAL                                                                                                           |