# RequestCommentList

A paginated list of request comments

## Example Usage

```typescript
import { RequestCommentList } from "opal-mcp/models/components";

let value: RequestCommentList = {
  comments: [
    {
      createdAt: new Date("2021-01-06T20:00:00Z"),
      requestId: "4c86c85d-0651-43e2-a748-d69d658418e8",
      userId: "c86c85d-0651-43e2-a748-d69d658418e8",
      comment: "This is a comment.",
    },
  ],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `comments`                                                               | [components.RequestComment](../../models/components/requestcomment.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |