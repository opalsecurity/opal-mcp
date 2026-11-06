# OpalAccessResultNode

A matched access grant from an ACCESS OpalQuery — one per (principal, entitlement, access level), with every access path as metadata.

## Example Usage

```typescript
import { OpalAccessResultNode } from "opal-mcp/models/components";

let value: OpalAccessResultNode = {
  principalId: "121cea33-8af7-49ab-9d3c-da0d62a7b6a6",
  entitlementId: "96d231dc-6b86-4bd5-ad8b-82b476a19388",
  isDirect: false,
  paths: [],
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `principalId`                                                                                                            | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | The principal entity ID.                                                                                                 |
| `entitlementId`                                                                                                          | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | The entitlement entity ID.                                                                                               |
| `accessLevelRemoteId`                                                                                                    | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Remote ID of the access level.                                                                                           |
| `accessLevelName`                                                                                                        | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Display name of the access level.                                                                                        |
| `effectiveExpiration`                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                            | :heavy_minus_sign:                                                                                                       | The expiration in effect across all paths (the latest-expiring; a permanent path wins). Null means access never expires. |
| `isDirect`                                                                                                               | *boolean*                                                                                                                | :heavy_check_mark:                                                                                                       | True when any path is a direct grant.                                                                                    |
| `paths`                                                                                                                  | [components.OpalAccessPathDetail](../../models/components/opalaccesspathdetail.md)[]                                     | :heavy_check_mark:                                                                                                       | Every access path reaching this grant.                                                                                   |