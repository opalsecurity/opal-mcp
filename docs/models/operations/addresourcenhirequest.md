# AddResourceNhiRequest

## Example Usage

```typescript
import { AddResourceNhiRequest } from "opal-mcp/models/operations";

let value: AddResourceNhiRequest = {
  resourceId: "4baf8423-db0a-4037-a4cf-f79c60cb67a5",
  nonHumanIdentityId: "f92aa855-cea9-4814-b9d8-f2a60d3e4a06",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `resourceId`                                                                                 | *string*                                                                                     | :heavy_check_mark:                                                                           | The ID of the resource.                                                                      | 4baf8423-db0a-4037-a4cf-f79c60cb67a5                                                         |
| `nonHumanIdentityId`                                                                         | *string*                                                                                     | :heavy_check_mark:                                                                           | The resource ID of the non-human identity to add.                                            | f92aa855-cea9-4814-b9d8-f2a60d3e4a06                                                         |
| `requestBody`                                                                                | [operations.AddResourceNhiRequestBody](../../models/operations/addresourcenhirequestbody.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          | {<br/>"duration_minutes": 60,<br/>"access_level_remote_id": "roles/cloudsql.instanceUser"<br/>} |