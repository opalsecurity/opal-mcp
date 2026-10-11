# Token

A first-party API token.

## Example Usage

```typescript
import { Token } from "opal-mcp/models/components";

let value: Token = {
  tokenId: "f454d283-ca87-4a8a-bdbb-df212eca5353",
  createdAt: new Date("2022-01-23T04:56:07Z"),
  tokenLabel: "My API Token",
  creatorUserId: "d4a7d928-783e-4599-8ec6-088d635a5bcc",
  userId: "d4a7d928-783e-4599-8ec6-088d635a5bcc",
  accessLevel: "READ_ONLY",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `tokenId`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the API token.                                                                      | f454d283-ca87-4a8a-bdbb-df212eca5353                                                          |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The date and time the token was created.                                                      | 2022-01-23 04:56:07 +0000 UTC                                                                 |
| `tokenLabel`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | A human-readable label for the token.                                                         | My API Token                                                                                  |
| `creatorUserId`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the user who created the token.                                                     | d4a7d928-783e-4599-8ec6-088d635a5bcc                                                          |
| `userId`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the user the token authenticates as.                                                | d4a7d928-783e-4599-8ec6-088d635a5bcc                                                          |
| `lastUsedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date and time the token was last used.                                                    | 2022-01-23 04:56:07 +0000 UTC                                                                 |
| `accessLevel`                                                                                 | [components.ApiAccessLevelEnum](../../models/components/apiaccesslevelenum.md)                | :heavy_check_mark:                                                                            | The access level of an API token.                                                             |                                                                                               |
| `expiresAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date and time the token expires.                                                          | 2023-01-23 04:56:07 +0000 UTC                                                                 |