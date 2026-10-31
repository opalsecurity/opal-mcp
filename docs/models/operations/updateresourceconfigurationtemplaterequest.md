# UpdateResourceConfigurationTemplateRequest

## Example Usage

```typescript
import { UpdateResourceConfigurationTemplateRequest } from "opal-mcp/models/operations";

let value: UpdateResourceConfigurationTemplateRequest = {
  resourceId: "4baf8423-db0a-4037-a4cf-f79c60cb67a5",
  resourceConfigurationTemplate: {
    configurationTemplateId: "06851574-e50d-40ca-8c78-f72ae6ab4304",
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `resourceId`                                                                                         | *string*                                                                                             | :heavy_check_mark:                                                                                   | The ID of the resource whose configuration template link is being set.                               | 4baf8423-db0a-4037-a4cf-f79c60cb67a5                                                                 |
| `resourceConfigurationTemplate`                                                                      | [components.ResourceConfigurationTemplate](../../models/components/resourceconfigurationtemplate.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  | {<br/>"configuration_template_id": "06851574-e50d-40ca-8c78-f72ae6ab4304"<br/>}                      |