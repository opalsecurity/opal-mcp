# DeletePaladinContextSourceRequest

## Example Usage

```typescript
import { DeletePaladinContextSourceRequest } from "opal-mcp/models/operations";

let value: DeletePaladinContextSourceRequest = {
  paladinId: "32acc112-21ff-4669-91c2-21e27683eaa1",
  contextSourceId: "8a1f2c3d-4b5e-6f70-8192-a3b4c5d6e7f8",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `paladinId`                          | *string*                             | :heavy_check_mark:                   | The ID of the Paladin.               | 32acc112-21ff-4669-91c2-21e27683eaa1 |
| `contextSourceId`                    | *string*                             | :heavy_check_mark:                   | The ID of the context source.        | 8a1f2c3d-4b5e-6f70-8192-a3b4c5d6e7f8 |