# IdpStatusFilter

Filters USER entities by their HR/IDP lifecycle status. Only applies to USER entities; GROUP and RESOURCE entities never match, in either polarity. `statuses` combine with OR. `not` inverts the match within the user domain (e.g. "IDP status is NOT active"), so it still returns only users rather than sweeping in groups/resources.


## Example Usage

```typescript
import { IdpStatusFilter } from "opal-mcp/models/components";

let value: IdpStatusFilter = {
  statuses: [
    "ACTIVE",
  ],
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `statuses`                                                                         | [components.UserHrIdpStatusEnum](../../models/components/userhridpstatusenum.md)[] | :heavy_minus_sign:                                                                 | Match users whose HR/IDP status is one of these values.                            |
| `not`                                                                              | *boolean*                                                                          | :heavy_minus_sign:                                                                 | Invert the match within the user domain (e.g. "IDP status is NOT active").         |