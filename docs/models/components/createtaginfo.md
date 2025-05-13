# CreateTagInfo

# CreateTagInfo Object
### Description
The `CreateTagInfo` object is used to represent configuration for a new tag.

### Usage Example
Use in the `POST Tag` endpoint.

## Example Usage

```typescript
import { CreateTagInfo } from "opal-mcp/models/components";

let value: CreateTagInfo = {
  tagKey: "api-scope",
  tagValue: "production",
};
```

## Fields

| Field                           | Type                            | Required                        | Description                     | Example                         |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `tagKey`                        | *string*                        | :heavy_check_mark:              | The key of the tag to create.   | api-scope                       |
| `tagValue`                      | *string*                        | :heavy_minus_sign:              | The value of the tag to create. | production                      |