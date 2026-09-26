# EntityAdminFilter

Filters GROUP and RESOURCE entities by their admin owner. USER entities never match, in either polarity. `not` inverts the match within the resource/group domain (self-negating, like IdpStatusFilter): omit it (or false) to include entities owned by the given owners, set it true to exclude them.


## Example Usage

```typescript
import { EntityAdminFilter } from "opal-mcp/models/components";

let value: EntityAdminFilter = {
  ownerIDs: [
    "417aeb98-121a-4844-8c4c-ad7b7121dddf",
    "e1ab04ef-a809-4835-a54e-29444044fa12",
  ],
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `ownerIDs`                                                                | *string*[]                                                                | :heavy_check_mark:                                                        | The owner (group) UUIDs to match entities against.                        |
| `not`                                                                     | *boolean*                                                                 | :heavy_minus_sign:                                                        | Invert the match — return resources/groups NOT owned by the given owners. |