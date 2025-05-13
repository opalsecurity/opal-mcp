# UpdateResourceInfoList

## Example Usage

```typescript
import { UpdateResourceInfoList } from "opal-mcp/models/components";

let value: UpdateResourceInfoList = {
  resources: [
    {
      resourceId: "f454d283-ca87-4a8a-bdbb-df212eca5353",
      name: "my-mongo-db",
      description: "This resource represents AWS IAM role \"SupportUser\".",
      adminOwnerId: "7c86c85d-0651-43e2-a748-d69d658418e8",
      maxDuration: 120,
      requireManagerApproval: false,
      requireSupportTicket: false,
    },
    {
      resourceId: "99d0b81d-14be-4cf6-bd27-348b4af1d11b",
      name: "Admin Role",
      description: "This resource represents GCP project \"app-demo\".",
      adminOwnerId: "4220bc12-ab8a-4b5d-be7b-f6bbcf9159f3",
      maxDuration: 360,
      requireManagerApproval: false,
      requireSupportTicket: true,
    },
  ],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `resources`                                                                      | [components.UpdateResourceInfo](../../models/components/updateresourceinfo.md)[] | :heavy_check_mark:                                                               | A list of resources with information to update.                                  |