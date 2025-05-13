# GetSyncErrorsRequest

## Example Usage

```typescript
import { GetSyncErrorsRequest } from "opal-mcp/models/operations";

let value: GetSyncErrorsRequest = {
  appId: "29827fb8-f2dd-4e80-9576-28e31e9934ac",
  resourceId: "4baf8423-db0a-4037-a4cf-f79c60cb67a5",
  groupId: "9546209c-42c2-4801-96d7-9ec42df0f59c",
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     | Example                                         |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `appId`                                         | *string*                                        | :heavy_minus_sign:                              | The ID of the app to list sync errors for.      | 29827fb8-f2dd-4e80-9576-28e31e9934ac            |
| `resourceId`                                    | *string*                                        | :heavy_minus_sign:                              | The ID of the resource to list sync errors for. | 4baf8423-db0a-4037-a4cf-f79c60cb67a5            |
| `groupId`                                       | *string*                                        | :heavy_minus_sign:                              | The ID of the group to list sync errors for.    | 9546209c-42c2-4801-96d7-9ec42df0f59c            |