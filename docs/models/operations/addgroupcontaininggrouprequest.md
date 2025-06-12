# AddGroupContainingGroupRequest

## Example Usage

```typescript
import { AddGroupContainingGroupRequest } from "opal-mcp/models/operations";

let value: AddGroupContainingGroupRequest = {
  groupId: "4baf8423-db0a-4037-a4cf-f79c60cb67a5",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `groupId`                                                                          | *string*                                                                           | :heavy_check_mark:                                                                 | The ID of the group.                                                               | 4baf8423-db0a-4037-a4cf-f79c60cb67a5                                               |
| `groupContainingGroup`                                                             | [components.GroupContainingGroup](../../models/components/groupcontaininggroup.md) | :heavy_check_mark:                                                                 | N/A                                                                                | {<br/>"containing_group_id": "f454d283-ca87-4a8a-bdbb-df212eca5353"<br/>}          |