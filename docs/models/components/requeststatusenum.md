# RequestStatusEnum

# Request Status
### Description
The `RequestStatus` enum is used to represent the status of a request.

### Usage Example
Returned from the `GET Requests` endpoint.

## Example Usage

```typescript
import { RequestStatusEnum } from "opal-mcp/models/components";

let value: RequestStatusEnum = "DENIED";
```

## Values

```typescript
"PENDING" | "APPROVED" | "DENIED" | "CANCELED"
```