# OpalAccessPathResultNode

A matched access path from an ACCESS_PATH OpalQuery.

## Example Usage

```typescript
import { OpalAccessPathResultNode } from "opal-mcp/models/components";

let value: OpalAccessPathResultNode = {
  principalId: "6452070e-bdac-4025-9f85-5151af8dd6b2",
  entitlementId: "ca477301-2f5c-4632-8224-b6bf86a827b1",
  depth: 737488,
  path: [
    "6cf699bf-e253-4887-862a-df18b2dc3278",
    "647c952e-7e91-4f56-9d34-b769f465ea43",
    "47676a47-2785-4ebb-9a04-d5f51735ce58",
  ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `principalId`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | The principal entity ID.                                                                      |
| `entitlementId`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | The entitlement entity ID.                                                                    |
| `accessLevelRemoteId`                                                                         | *string*                                                                                      | :heavy_minus_sign:                                                                            | Remote ID of the terminal access level.                                                       |
| `accessLevelName`                                                                             | *string*                                                                                      | :heavy_minus_sign:                                                                            | Display name of the terminal access level.                                                    |
| `expiration`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Expiration of the terminal access, if any.                                                    |
| `depth`                                                                                       | *number*                                                                                      | :heavy_check_mark:                                                                            | Number of hops from principal to entitlement (path length - 1).                               |
| `path`                                                                                        | *string*[]                                                                                    | :heavy_check_mark:                                                                            | Entity IDs along the path from principal to entitlement.                                      |