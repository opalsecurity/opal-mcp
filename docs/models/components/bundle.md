# Bundle

## Example Usage

```typescript
import { Bundle } from "opal-mcp/models/components";

let value: Bundle = {
  bundleId: "a381e7a3-e5e0-4c48-b1d6-4ccb4c191bc1",
  name: "Bundle 1",
  description: "Description of bundle 1",
  adminOwnerId: "4aed3e8a-727b-4d72-8010-3b8710c50bec",
  totalNumItems: 15,
  totalNumResources: 10,
  totalNumGroups: 5,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `bundleId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The ID of the bundle.                                                                         | a381e7a3-e5e0-4c48-b1d6-4ccb4c191bc1                                                          |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | The name of the bundle.                                                                       | Bundle 1                                                                                      |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The description of the bundle.                                                                | Description of bundle 1                                                                       |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The creation timestamp of the bundle, in ISO 8601 format                                      |                                                                                               |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The last updated timestamp of the bundle, in ISO 8601 format                                  |                                                                                               |
| `adminOwnerId`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | The ID of the owner of the bundle.                                                            | 4aed3e8a-727b-4d72-8010-3b8710c50bec                                                          |
| `totalNumItems`                                                                               | *number*                                                                                      | :heavy_minus_sign:                                                                            | The total number of items in the bundle.                                                      | 15                                                                                            |
| `totalNumResources`                                                                           | *number*                                                                                      | :heavy_minus_sign:                                                                            | The total number of resources in the bundle.                                                  | 10                                                                                            |
| `totalNumGroups`                                                                              | *number*                                                                                      | :heavy_minus_sign:                                                                            | The total number of groups in the bundle.                                                     | 5                                                                                             |