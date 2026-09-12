# PaladinContextSource

# PaladinContextSource Object
### Description
A context source (a Slack channel or a document) that a Paladin is
configured to read during access-request review.

## Example Usage

```typescript
import { PaladinContextSource } from "opal-mcp/models/components";

let value: PaladinContextSource = {
  id: "8a1f2c3d-4b5e-6f70-8192-a3b4c5d6e7f8",
  paladinId: "32acc112-21ff-4669-91c2-21e27683eaa1",
  sourceKind: "SLACK_CHANNEL",
  thirdPartyProvider: "SLACK",
  remoteId: "C0123456789",
  name: "#access-requests",
  url: "https://example.slack.com/archives/C0123456789",
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                           | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | The ID of the context source.                                                                                                  |
| `paladinId`                                                                                                                    | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | The ID of the Paladin this source belongs to.                                                                                  |
| `sourceKind`                                                                                                                   | [components.PaladinContextSourceKind](../../models/components/paladincontextsourcekind.md)                                     | :heavy_check_mark:                                                                                                             | The kind of source a Paladin can read. A SLACK_CHANNEL is a Slack channel; a DOCUMENT is a Notion or Confluence page.          |
| `thirdPartyProvider`                                                                                                           | [components.PaladinContextSourceProvider](../../models/components/paladincontextsourceprovider.md)                             | :heavy_check_mark:                                                                                                             | The integration a Paladin context source comes from.                                                                           |
| `remoteId`                                                                                                                     | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | The provider's identifier for the source. The Slack channel ID for a channel, or the Notion/Confluence page ID for a document. |
| `name`                                                                                                                         | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | A human-readable name for the source.                                                                                          |
| `url`                                                                                                                          | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | A link to the source.                                                                                                          |