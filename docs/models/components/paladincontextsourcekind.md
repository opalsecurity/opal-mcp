# PaladinContextSourceKind

The kind of source a Paladin can read. A SLACK_CHANNEL is a Slack channel; a DOCUMENT is a Notion or Confluence page.

## Example Usage

```typescript
import { PaladinContextSourceKind } from "opal-mcp/models/components";

let value: PaladinContextSourceKind = "DOCUMENT";
```

## Values

```typescript
"SLACK_CHANNEL" | "DOCUMENT"
```