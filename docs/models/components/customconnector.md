# CustomConnector

Remote info for a custom connector resource.

## Example Usage

```typescript
import { CustomConnector } from "opal-mcp/models/components";

let value: CustomConnector = {
  remoteResourceId: "01fa7402-01d8-103b-8deb-5f3a0ab7884",
  canHaveUsageEvents: false,
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `remoteResourceId`                                                   | *string*                                                             | :heavy_check_mark:                                                   | The id of the resource in the end system                             | 01fa7402-01d8-103b-8deb-5f3a0ab7884                                  |
| `canHaveUsageEvents`                                                 | *boolean*                                                            | :heavy_check_mark:                                                   | A bool representing whether or not the resource can have usage data. | false                                                                |