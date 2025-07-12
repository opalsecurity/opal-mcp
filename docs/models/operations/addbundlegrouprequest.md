# AddBundleGroupRequest

## Example Usage

```typescript
import { AddBundleGroupRequest } from "opal-mcp/models/operations";

let value: AddBundleGroupRequest = {
  bundleId: "32acc112-21ff-4669-91c2-21e27683eaa1",
  requestBody: {
    groupId: "72e75a6f-7183-48c5-94ff-6013f213314b",
    accessLevelRemoteId: "arn:aws:iam::590304332660:role/AdministratorAccess",
    accessLevelName: "AdministratorAccess",
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `bundleId`                                                                                   | *string*                                                                                     | :heavy_check_mark:                                                                           | The ID of the bundle.                                                                        | 32acc112-21ff-4669-91c2-21e27683eaa1                                                         |
| `requestBody`                                                                                | [operations.AddBundleGroupRequestBody](../../models/operations/addbundlegrouprequestbody.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |                                                                                              |