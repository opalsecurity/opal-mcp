# OpalQueryResultNode

A matched entity from an OpalQuery result.

## Example Usage

```typescript
import { OpalQueryResultNode } from "opal-mcp/models/components";

let value: OpalQueryResultNode = {
  id: "71bb2556-0d6b-4d0a-9cf1-c5e65bec706d",
  name: "<value>",
  entityType: "GROUP",
  entityItemType: "OPAL_ROLE",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `id`                                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | The entity's unique identifier.                                                                      |                                                                                                      |
| `name`                                                                                               | *string*                                                                                             | :heavy_check_mark:                                                                                   | The display name of the entity.                                                                      |                                                                                                      |
| `entityType`                                                                                         | [components.OpalQueryResultNodeEntityType](../../models/components/opalqueryresultnodeentitytype.md) | :heavy_check_mark:                                                                                   | The top-level entity type.                                                                           |                                                                                                      |
| `entityItemType`                                                                                     | [components.EntityItemTypeEnum](../../models/components/entityitemtypeenum.md)                       | :heavy_check_mark:                                                                                   | Granular subtype of an entity.                                                                       | OPAL_ROLE                                                                                            |