# VisibilityInfo

Visibility infomation of an entity.

## Example Usage

```typescript
import { VisibilityInfo } from "opal-mcp/models/components";

let value: VisibilityInfo = {
  visibility: "LIMITED",
  visibilityGroupIds: [
    "7870617d-e72a-47f5-a84c-693817ab4567",
    "1520617d-e72a-47f5-a84c-693817ab48ad2",
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `visibility`                                                                   | [components.VisibilityTypeEnum](../../models/components/visibilitytypeenum.md) | :heavy_check_mark:                                                             | The visibility level of the entity.                                            | GLOBAL                                                                         |
| `visibilityGroupIds`                                                           | *string*[]                                                                     | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |