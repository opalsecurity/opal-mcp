# ResourceConfigurationTemplate

A reference, by ID only, to the configuration template a resource is
linked to. This schema does not include any of the template's own
fields (name, description, request configurations, visibility, etc.) —
to read or modify those, use the `/configuration-templates` endpoints
with the ID carried here. A `null` `configuration_template_id`
indicates that the resource is not linked to a configuration template
and uses its own private configuration.

## Example Usage

```typescript
import { ResourceConfigurationTemplate } from "opal-mcp/models/components";

let value: ResourceConfigurationTemplate = {
  configurationTemplateId: "06851574-e50d-40ca-8c78-f72ae6ab4304",
};
```

## Fields

| Field                                                                                                                                                                                                                                                          | Type                                                                                                                                                                                                                                                           | Required                                                                                                                                                                                                                                                       | Description                                                                                                                                                                                                                                                    | Example                                                                                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `configurationTemplateId`                                                                                                                                                                                                                                      | *string*                                                                                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                                                                             | The ID of the configuration template that the resource is linked<br/>to, or `null` if the resource is not linked to a configuration<br/>template. Only the ID is exposed here; the template's own fields<br/>are managed through the `/configuration-templates` endpoints. | 06851574-e50d-40ca-8c78-f72ae6ab4304                                                                                                                                                                                                                           |