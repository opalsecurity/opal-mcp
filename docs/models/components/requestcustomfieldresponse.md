# RequestCustomFieldResponse

## Example Usage

```typescript
import { RequestCustomFieldResponse } from "opal-mcp/models/components";

let value: RequestCustomFieldResponse = {
  fieldName: "<value>",
  fieldType: "SHORT_TEXT",
  fieldValue: "This is a response to a long text or short text or multi choice",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `fieldName`                                                                                                    | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `fieldType`                                                                                                    | [components.RequestTemplateCustomFieldTypeEnum](../../models/components/requesttemplatecustomfieldtypeenum.md) | :heavy_check_mark:                                                                                             | The type of the custom request field.                                                                          |
| `fieldValue`                                                                                                   | *components.FieldValue*                                                                                        | :heavy_check_mark:                                                                                             | N/A                                                                                                            |