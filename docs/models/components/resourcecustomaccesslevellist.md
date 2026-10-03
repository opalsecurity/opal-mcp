# ResourceCustomAccessLevelList

A list of custom access levels.

## Example Usage

```typescript
import { ResourceCustomAccessLevelList } from "opal-mcp/models/components";

let value: ResourceCustomAccessLevelList = {
  customAccessLevels: [
    {
      resourceCustomAccessLevelId: "501f82d2-e6ec-4ca8-9f72-7535a1104ae4",
      resourceId: "33e943e8-a146-4c6b-981b-0131ef51fd4b",
      accessLevel: {
        accessLevelName: "AdminRole",
        accessLevelRemoteId:
          "arn:aws:iam::590304332660:role/AdministratorAccess",
      },
      requestableByDefault: false,
    },
  ],
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `customAccessLevels`                                                                                           | [components.ResourceCustomAccessLevelResponse](../../models/components/resourcecustomaccesslevelresponse.md)[] | :heavy_check_mark:                                                                                             | N/A                                                                                                            |