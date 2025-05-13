# GetTagRequest

## Example Usage

```typescript
import { GetTagRequest } from "opal-mcp/models/operations";

let value: GetTagRequest = {
  tagKey: "api-scope",
  tagValue: "production",
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  | Example                      |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `tagKey`                     | *string*                     | :heavy_check_mark:           | The key of the tag to get.   | api-scope                    |
| `tagValue`                   | *string*                     | :heavy_minus_sign:           | The value of the tag to get. | production                   |