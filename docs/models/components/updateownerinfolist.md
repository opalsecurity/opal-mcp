# UpdateOwnerInfoList

## Example Usage

```typescript
import { UpdateOwnerInfoList } from "opal-mcp/models/components";

let value: UpdateOwnerInfoList = {
  owners: [
    {
      ownerId: "f454d283-ca87-4a8a-bdbb-df212eca5353",
      name: "API Owner",
      description: "This owner represents the API team owners.",
      accessRequestEscalationPeriod: 120,
    },
    {
      ownerId: "99d0b81d-14be-4cf6-bd27-348b4af1d11b",
      name: "Finance Owner",
      description: "This owner represents the Finance team owners.",
      accessRequestEscalationPeriod: 15,
    },
  ],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `owners`                                                                   | [components.UpdateOwnerInfo](../../models/components/updateownerinfo.md)[] | :heavy_check_mark:                                                         | A list of owners with information to update.                               |