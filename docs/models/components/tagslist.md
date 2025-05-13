# TagsList

## Example Usage

```typescript
import { TagsList } from "opal-mcp/models/components";

let value: TagsList = {
  tags: [
    {
      tagId: "f290a738-5f9f-43c2-ad67-fa31ff0eb946",
      createdAt: new Date("2022-01-23T04:56:07Z"),
      updatedAt: new Date("2022-02-23T01:34:07Z"),
      userCreatorId: "d4a7d928-783e-4599-8ec6-088d635a5bcc",
      key: "database-name",
      value: "redis_db",
    },
  ],
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `tags`                                             | [components.Tag](../../models/components/tag.md)[] | :heavy_check_mark:                                 | N/A                                                |