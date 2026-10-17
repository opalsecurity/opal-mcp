# CreatePaladinContextSourceInfo

Information for adding a context source to a Paladin.

## Example Usage

```typescript
import { CreatePaladinContextSourceInfo } from "opal-mcp/models/components";

let value: CreatePaladinContextSourceInfo = {
  sourceKind: "SLACK_CHANNEL",
  thirdPartyProvider: "SLACK",
  remoteId: "C0123456789",
  name: "#access-requests",
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `sourceKind`                                                                                                                   | [components.PaladinContextSourceKind](../../models/components/paladincontextsourcekind.md)                                     | :heavy_check_mark:                                                                                                             | The kind of source a Paladin can read. A SLACK_CHANNEL is a Slack channel; a DOCUMENT is a Notion or Confluence page.          |
| `thirdPartyProvider`                                                                                                           | [components.PaladinContextSourceProvider](../../models/components/paladincontextsourceprovider.md)                             | :heavy_check_mark:                                                                                                             | The integration a Paladin context source comes from.                                                                           |
| `remoteId`                                                                                                                     | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | The provider's identifier for the source. The Slack channel ID for a channel, or the Notion/Confluence page ID for a document. |
| `name`                                                                                                                         | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | An optional human-readable name for the source.                                                                                |
| `url`                                                                                                                          | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | An optional link to the source.                                                                                                |