# SyncTask

Represents a sync task that has been completed, either successfully or with errors.

## Example Usage

```typescript
import { SyncTask } from "opal-mcp/models/components";

let value: SyncTask = {
  id: "7c86c85d-0651-43e2-a748-d69d658418e8",
  completedAt: new Date("2023-10-01T12:00:00Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the sync task.                                                                      | 7c86c85d-0651-43e2-a748-d69d658418e8                                                          |
| `completedAt`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The time when the sync task was completed.                                                    | 2023-10-01 12:00:00 +0000 UTC                                                                 |