# PageInfo

## Example Usage

```typescript
import { PageInfo } from "opal-mcp/models/components";

let value: PageInfo = {
  hasNextPage: false,
  endCursor: "<value>",
  hasPreviousPage: false,
  startCursor: "<value>",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `hasNextPage`                                        | *boolean*                                            | :heavy_check_mark:                                   | Whether there are more items after the end cursor    |
| `endCursor`                                          | *string*                                             | :heavy_check_mark:                                   | The cursor to continue pagination forwards           |
| `hasPreviousPage`                                    | *boolean*                                            | :heavy_check_mark:                                   | Whether there are more items before the start cursor |
| `startCursor`                                        | *string*                                             | :heavy_check_mark:                                   | The cursor to continue pagination backwards          |