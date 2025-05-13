# CustomMetadatum

## Example Usage

```typescript
import { CustomMetadatum } from "opal-mcp/models/components";

let value: CustomMetadatum = {
  name: "<value>",
  type: "BOOLEAN",
  value: "<value>",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                         | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `type`                                                                                                         | [components.RequestTemplateCustomFieldTypeEnum](../../models/components/requesttemplatecustomfieldtypeenum.md) | :heavy_check_mark:                                                                                             | The type of the custom request field.                                                                          |
| `value`                                                                                                        | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |