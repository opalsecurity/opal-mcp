# CursorOriginRepository

Remote info for a Cursor Origin repository.

## Example Usage

```typescript
import { CursorOriginRepository } from "opal-mcp/models/components";

let value: CursorOriginRepository = {
  repositoryName: "acme/rocket",
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           | Example                               |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `repositoryName`                      | *string*                              | :heavy_check_mark:                    | The repository's owner slug and name. | acme/rocket                           |