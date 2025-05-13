# PaginatedConfigurationTemplateList

# PaginatedConfigurationTemplateList Object
### Description
The `PaginatedConfigurationTemplateList` object is used to store a list of configuration templates.

### Usage Example
Returned from the `GET Configuration Templates` endpoint.

## Example Usage

```typescript
import { PaginatedConfigurationTemplateList } from "opal-mcp/models/components";

let value: PaginatedConfigurationTemplateList = {
  results: [
    {
      configurationTemplateId: "7c86c85d-0651-43e2-a748-d69d658418e8",
      adminOwnerId: "a4d7d928-783e-4599-8ec6-088d635af4ac",
      visibility: {
        visibility: "GLOBAL",
      },
      linkedAuditMessageChannelIds: [
        "l3cb7e41-12ba-46da-92ff-030abe0450b1",
        "f3cb7e41-12ba-46da-92ff-030abe0450b2",
      ],
      requestConfigurationId: "r3cb7e41-12ba-46da-92ff-030abe0450b1",
      memberOncallScheduleIds: [
        "23cb7e41-12ba-46da-92ff-030abe0450b1",
        "m3cb7e41-12ba-46da-92ff-030abe0450b2",
      ],
      breakGlassUserIds: [
        "63cb7e41-12ba-46da-92ff-030abe0450b1",
        "b3cb7e41-12ba-46da-92ff-030abe0450b2",
      ],
      requireMfaToApprove: false,
      requireMfaToConnect: false,
    },
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `results`                                                                              | [components.ConfigurationTemplate](../../models/components/configurationtemplate.md)[] | :heavy_minus_sign:                                                                     | N/A                                                                                    |