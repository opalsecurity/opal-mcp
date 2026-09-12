# RequestComment

# Request Comment Object
### Description
The `RequestComment` object is used to represent a comment on a request.

### Usage Example
Returned from the `GET Requests` endpoint as part of a `Request` object.

## Example Usage

```typescript
import { RequestComment } from "opal-mcp/models/components";

let value: RequestComment = {
  createdAt: new Date("2021-01-06T20:00:00Z"),
  requestId: "4c86c85d-0651-43e2-a748-d69d658418e8",
  userId: "c86c85d-0651-43e2-a748-d69d658418e8",
  comment: "This is a comment.",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The date and time the comment was created.                                                    | 2021-01-06 20:00:00 +0000 UTC                                                                 |
| `requestId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | The unique identifier of the request the comment is associated with.                          | 7c86c85d-0651-43e2-a748-d69d658418e8                                                          |
| `userId`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | The unique identifier of the user who made the comment.                                       | 7c86c85d-0651-43e2-a748-d69d658418e8                                                          |
| `userFullName`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | The user's full name.                                                                         | Jake Barnes                                                                                   |
| `userEmail`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | The user's email address.                                                                     | jake.barnes@company.com                                                                       |
| `comment`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | The content of the comment.                                                                   | This is a comment.                                                                            |