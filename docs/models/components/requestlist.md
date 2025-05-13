# RequestList

# Request List
### Description
The `RequestList` object is used to represent a list of requests.

### Usage Example
Returned from the `GET Requests` endpoint.

## Example Usage

```typescript
import { RequestList } from "opal-mcp/models/components";

let value: RequestList = {
  requests: [
    {
      id: "7c86c85d-0651-43e2-a748-d69d658418e8",
      createdAt: new Date("2021-01-06T20:00:00Z"),
      updatedAt: new Date("2021-01-06T20:00:00Z"),
      requesterId: "c86c85d-0651-43e2-a748-d69d658418e8",
      targetUserId: "r86c85d-0651-43e2-a748-d69d658418e8",
      targetGroupId: "g86c85d-0651-43e2-a748-d69d658418e8",
      status: "CANCELED",
      reason: "I need this resource.",
      durationMinutes: 1440,
    },
  ],
  cursor:
    "eyJjcmVhdGVkX2F0IjoiMjAyMS0wMS0wNlQyMDo0NzowMFoiLCJ2YWx1ZSI6ImFkbWluIn0=",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `requests`                                                               | [components.Request](../../models/components/request.md)[]               | :heavy_minus_sign:                                                       | The list of requests.                                                    |                                                                          |
| `cursor`                                                                 | *string*                                                                 | :heavy_minus_sign:                                                       | The cursor to use in the next request to get the next page of results.   | eyJjcmVhdGVkX2F0IjoiMjAyMS0wMS0wNlQyMDo0NzowMFoiLCJ2YWx1ZSI6ImFkbWluIn0= |