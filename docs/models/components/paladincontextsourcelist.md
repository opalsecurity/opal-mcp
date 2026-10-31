# PaladinContextSourceList

# PaladinContextSourceList Object
### Description
A list of `PaladinContextSource` objects.

## Example Usage

```typescript
import { PaladinContextSourceList } from "opal-mcp/models/components";

let value: PaladinContextSourceList = {
  results: [
    {
      id: "8a1f2c3d-4b5e-6f70-8192-a3b4c5d6e7f8",
      paladinId: "32acc112-21ff-4669-91c2-21e27683eaa1",
      sourceKind: "SLACK_CHANNEL",
      thirdPartyProvider: "SLACK",
      remoteId: "C0123456789",
      name: "#access-requests",
      url: "https://example.slack.com/archives/C0123456789",
    },
  ],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `results`                                                                            | [components.PaladinContextSource](../../models/components/paladincontextsource.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |