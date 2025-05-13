# EventsRequest

## Example Usage

```typescript
import { EventsRequest } from "opal-mcp/models/operations";

let value: EventsRequest = {
  actorFilter: "29827fb8-f2dd-4e80-9576-28e31e9934ac",
  objectFilter: "29827fb8-f2dd-4e80-9576-28e31e9934ac",
  eventTypeFilter: "USER_MFA_RESET",
  apiTokenFilter: "fullaccess:**************************M_g==",
  cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
  pageSize: 200,
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 | Example                                                                     |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `startDateFilter`                                                           | *string*                                                                    | :heavy_minus_sign:                                                          | A start date filter for the events.                                         |                                                                             |
| `endDateFilter`                                                             | *string*                                                                    | :heavy_minus_sign:                                                          | An end date filter for the events.                                          |                                                                             |
| `actorFilter`                                                               | *string*                                                                    | :heavy_minus_sign:                                                          | An actor filter for the events. Supply the ID of the actor.                 | 29827fb8-f2dd-4e80-9576-28e31e9934ac                                        |
| `objectFilter`                                                              | *string*                                                                    | :heavy_minus_sign:                                                          | An object filter for the events. Supply the ID of the object.               | 29827fb8-f2dd-4e80-9576-28e31e9934ac                                        |
| `eventTypeFilter`                                                           | *string*                                                                    | :heavy_minus_sign:                                                          | An event type filter for the events.                                        | USER_MFA_RESET                                                              |
| `apiTokenFilter`                                                            | *string*                                                                    | :heavy_minus_sign:                                                          | An API filter for the events. Supply the name and preview of the API token. | fullaccess:**************************M_g==                                  |
| `cursor`                                                                    | *string*                                                                    | :heavy_minus_sign:                                                          | The pagination cursor value.                                                | cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw                    |
| `pageSize`                                                                  | *number*                                                                    | :heavy_minus_sign:                                                          | Number of results to return per page. Default is 200.                       | 200                                                                         |