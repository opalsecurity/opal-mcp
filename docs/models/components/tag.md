# Tag

# Tag Object
### Description
The `Tag` object is used to represent a tag.

### Usage Example
Get tags from the `GET Tag` endpoint.

## Example Usage

```typescript
import { Tag } from "opal-mcp/models/components";

let value: Tag = {
  tagId: "f290a738-5f9f-43c2-ad67-fa31ff0eb946",
  createdAt: new Date("2022-01-23T04:56:07Z"),
  updatedAt: new Date("2022-02-23T01:34:07Z"),
  userCreatorId: "d4a7d928-783e-4599-8ec6-088d635a5bcc",
  key: "database-name",
  value: "redis_db",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `tagId`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the tag.                                                                            | f290a738-5f9f-43c2-ad67-fa31ff0eb946                                                          |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date the tag was created.                                                                 | 2022-01-23 04:56:07 +0000 UTC                                                                 |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date the tag was last updated.                                                            | 2022-02-23 01:34:07 +0000 UTC                                                                 |
| `userCreatorId`                                                                               | *string*                                                                                      | :heavy_minus_sign:                                                                            | The ID of the user that created the tag.                                                      | d4a7d928-783e-4599-8ec6-088d635a5bcc                                                          |
| `key`                                                                                         | *string*                                                                                      | :heavy_minus_sign:                                                                            | The key of the tag.                                                                           | database-name                                                                                 |
| `value`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | The value of the tag.                                                                         | redis_db                                                                                      |