# SyncError

# SyncError Object
### Description
The `SyncError` object is used to represent a sync error.

### Usage Example
List from the `GET Sync Errors` endpoint.

## Example Usage

```typescript
import { SyncError } from "opal-mcp/models/components";

let value: SyncError = {
  firstSeen: new Date("2022-07-14T06:59:59Z"),
  lastSeen: new Date("2022-08-23T04:32:46Z"),
  errorMessage:
    "Failed to connect to the remote system - insufficient credentials.",
  appId: "b5a5ca27-0ea3-4d86-9199-2126d57d1fbd",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `firstSeen`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The time when this error was first seen.                                                      | 2022-07-14 06:59:59 +0000 UTC                                                                 |
| `lastSeen`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The time when this error was most recently seen.                                              | 2022-07-14 06:59:59 +0000 UTC                                                                 |
| `errorMessage`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | The error message associated with the sync error.                                             | Failed to connect to the remote system - insufficient credentials.                            |
| `appId`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | The ID of the app that the error occured for.                                                 | b5a5ca27-0ea3-4d86-9199-2126d57d1fbd                                                          |