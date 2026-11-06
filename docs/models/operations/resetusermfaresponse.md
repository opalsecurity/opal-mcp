# ResetUserMfaResponse

The MFA enrollments were reset, or the user has no Auth0 enrollments
to reset (never signed into Auth0).


## Example Usage

```typescript
import { ResetUserMfaResponse } from "opal-mcp/models/operations";

let value: ResetUserMfaResponse = {
  success: true,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `success`          | *boolean*          | :heavy_check_mark: | N/A                |