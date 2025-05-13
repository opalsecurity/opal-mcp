# GroupResourceList

## Example Usage

```typescript
import { GroupResourceList } from "opal-mcp/models/components";

let value: GroupResourceList = {
  groupResources: [
    {
      groupId: "7870617d-e72a-47f5-a84c-693817ab4567",
      resourceId: "1520617d-e72a-47f5-a84c-693817ab48ad2",
      accessLevel: {
        accessLevelName: "AdminRole",
        accessLevelRemoteId:
          "arn:aws:iam::590304332660:role/AdministratorAccess",
      },
    },
    {
      groupId: "50333e67-73ce-47ab-b049-d8abcd45f7a1",
      resourceId: "6f99639b-7928-4043-8184-47cbc6766145",
      accessLevel: {
        accessLevelName: "AdminRole",
        accessLevelRemoteId:
          "arn:aws:iam::590304332660:role/AdministratorAccess",
      },
    },
  ],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `groupResources`                                                       | [components.GroupResource](../../models/components/groupresource.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |