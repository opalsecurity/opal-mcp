# IdpGroupMappingList

## Example Usage

```typescript
import { IdpGroupMappingList } from "opal-mcp/models/components";

let value: IdpGroupMappingList = {
  mappings: [
    {
      groupId: "6f99639b-7928-4043-8184-47cbc6766145",
      alias: "finance-team",
      hiddenFromEndUser: false,
    },
    {
      groupId: "7870617d-e72a-47f5-a84c-693817ab4567",
      alias: "engineering-team",
      hiddenFromEndUser: false,
    },
  ],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `mappings`                                                                 | [components.IdpGroupMapping](../../models/components/idpgroupmapping.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |