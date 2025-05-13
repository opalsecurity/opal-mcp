# SyncErrorList

## Example Usage

```typescript
import { SyncErrorList } from "opal-mcp/models/components";

let value: SyncErrorList = {
  syncErrors: [
    {
      firstSeen: new Date("2022-07-14T06:59:59Z"),
      lastSeen: new Date("2022-08-23T04:32:46Z"),
      errorMessage:
        "Failed to connect to the remote system - insufficient credentials.",
      appId: "b5a5ca27-0ea3-4d86-9199-2126d57d1fbd",
    },
    {
      firstSeen: new Date("2023-04-24T06:59:59Z"),
      lastSeen: new Date("2024-08-21T04:32:46Z"),
      errorMessage: "Resource not found.",
      appId: "b5a5ca27-0ea3-4d86-9199-2126d57d1fbd",
    },
  ],
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `syncErrors`                                                   | [components.SyncError](../../models/components/syncerror.md)[] | :heavy_check_mark:                                             | N/A                                                            |