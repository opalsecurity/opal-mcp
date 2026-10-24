# UpdateGroupConfigurationTemplateRequest

## Example Usage

```typescript
import { UpdateGroupConfigurationTemplateRequest } from "opal-mcp/models/operations";

let value: UpdateGroupConfigurationTemplateRequest = {
  groupId: "4baf8423-db0a-4037-a4cf-f79c60cb67a5",
  groupConfigurationTemplate: {
    configurationTemplateId: "06851574-e50d-40ca-8c78-f72ae6ab4304",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `groupId`                                                                                      | *string*                                                                                       | :heavy_check_mark:                                                                             | The ID of the group whose configuration template link is being set.                            | 4baf8423-db0a-4037-a4cf-f79c60cb67a5                                                           |
| `groupConfigurationTemplate`                                                                   | [components.GroupConfigurationTemplate](../../models/components/groupconfigurationtemplate.md) | :heavy_check_mark:                                                                             | N/A                                                                                            | {<br/>"configuration_template_id": "06851574-e50d-40ca-8c78-f72ae6ab4304"<br/>}                |