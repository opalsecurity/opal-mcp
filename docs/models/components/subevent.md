# SubEvent

# Sub event Object
### Description
The `SubEvent` object is used to represent a subevent.

### Usage Example
Fetch from the `LIST Events` endpoint.

## Example Usage

```typescript
import { SubEvent } from "opal-mcp/models/components";

let value: SubEvent = {
  subEventType: "USERS_CREATED",
  additionalProperties: {
    "user_id": "29827fb8-f2dd-4e80-9576-28e31e9934ac",
    "user_name": "John Smith",
    "resource_id": "29827fb8-f2dd-4e80-9576-28e31e9934ac",
    "resource_name": "Figma",
  },
};
```

## Fields

| Field                                                                                                                                                                                                | Type                                                                                                                                                                                                 | Required                                                                                                                                                                                             | Description                                                                                                                                                                                          | Example                                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `subEventType`                                                                                                                                                                                       | *string*                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | The subevent type.                                                                                                                                                                                   | USERS_CREATED                                                                                                                                                                                        |
| `additionalProperties`                                                                                                                                                                               | Record<string, *any*>                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                   | N/A                                                                                                                                                                                                  | {<br/>"sub_event_type": "USERS_CREATED",<br/>"user_id": "29827fb8-f2dd-4e80-9576-28e31e9934ac",<br/>"user_name": "John Smith",<br/>"resource_id": "29827fb8-f2dd-4e80-9576-28e31e9934ac",<br/>"resource_name": "Figma"<br/>} |