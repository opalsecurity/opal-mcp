# CreatePaladinContextSourceRequest

## Example Usage

```typescript
import { CreatePaladinContextSourceRequest } from "opal-mcp/models/operations";

let value: CreatePaladinContextSourceRequest = {
  paladinId: "32acc112-21ff-4669-91c2-21e27683eaa1",
  createPaladinContextSourceInfo: {
    sourceKind: "SLACK_CHANNEL",
    thirdPartyProvider: "SLACK",
    remoteId: "C0123456789",
    name: "#access-requests",
  },
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 | Example                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `paladinId`                                                                                                                 | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | The ID of the Paladin.                                                                                                      | 32acc112-21ff-4669-91c2-21e27683eaa1                                                                                        |
| `createPaladinContextSourceInfo`                                                                                            | [components.CreatePaladinContextSourceInfo](../../models/components/createpaladincontextsourceinfo.md)                      | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         | {<br/>"source_kind": "SLACK_CHANNEL",<br/>"third_party_provider": "SLACK",<br/>"remote_id": "C0123456789",<br/>"name": "#access-requests"<br/>} |