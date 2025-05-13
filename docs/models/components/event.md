# Event

# Event Object
### Description
The `Event` object is used to represent an event.

### Usage Example
Fetch from the `LIST Events` endpoint.

## Example Usage

```typescript
import { Event } from "opal-mcp/models/components";

let value: Event = {
  eventId: "29827fb8-f2dd-4e80-9576-28e31e9934ac",
  actorUserId: "1b978423-db0a-4037-a4cf-f79c60cb67b3",
  actorName: "John Smith",
  eventType: "USERS_CREATED",
  createdAt: new Date("2022-01-23T04:56:07Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `eventId`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the event.                                                                          | 1b978423-db0a-4037-a4cf-f79c60cb67b3                                                          |
| `actorUserId`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the actor user.                                                                     | 29827fb8-f2dd-4e80-9576-28e31e9934ac                                                          |
| `actorName`                                                                                   | *any*                                                                                         | :heavy_check_mark:                                                                            | The name of the actor user.                                                                   | John Smith                                                                                    |
| `actorEmail`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | The email of the actor user.                                                                  | john@acmecorp.com                                                                             |
| `eventType`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | The event type.                                                                               | USERS_CREATED                                                                                 |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The day and time the event was created.                                                       | 2022-01-23 04:56:07 +0000 UTC                                                                 |
| `actorIpAddress`                                                                              | *string*                                                                                      | :heavy_minus_sign:                                                                            | The IP address of the event actor.                                                            | 255.255.255.0                                                                                 |
| `apiTokenName`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | The name of the API token used to create the event.                                           | My API Token                                                                                  |
| `apiTokenPreview`                                                                             | *string*                                                                                      | :heavy_minus_sign:                                                                            | The preview of the API token used to create the event.                                        | **************************M_g==                                                               |
| `subEvents`                                                                                   | [components.SubEvent](../../models/components/subevent.md)[]                                  | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |