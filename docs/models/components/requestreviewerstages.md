# RequestReviewerStages

The stages configuration for a request item

## Example Usage

```typescript
import { RequestReviewerStages } from "opal-mcp/models/components";

let value: RequestReviewerStages = {
  accessLevelName: "admin",
  accessLevelRemoteId: "arn:aws:iam::490306337630:role/SupportUser",
  itemName: "<value>",
  itemId: "f454d283-ca87-4a8a-bdbb-df212eca5353",
  stages: [],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `accessLevelName`                                                    | *string*                                                             | :heavy_minus_sign:                                                   | The name of the access level requested.                              | admin                                                                |
| `accessLevelRemoteId`                                                | *string*                                                             | :heavy_minus_sign:                                                   | The ID of the access level requested on the remote system.           | arn:aws:iam::490306337630:role/SupportUser                           |
| `itemName`                                                           | *string*                                                             | :heavy_check_mark:                                                   | The name of the requested item                                       |                                                                      |
| `itemId`                                                             | *string*                                                             | :heavy_check_mark:                                                   | The ID of the resource requested.                                    | f454d283-ca87-4a8a-bdbb-df212eca5353                                 |
| `stages`                                                             | [components.RequestStage](../../models/components/requeststage.md)[] | :heavy_check_mark:                                                   | The stages of review for this request                                |                                                                      |