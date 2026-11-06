# AgentActivityImages

# AgentActivityImages Object
### Description
The images attached to a prompt or returned by a tool. Only their number and size are
sent; the images themselves are not.

## Example Usage

```typescript
import { AgentActivityImages } from "opal-mcp/models/components";

let value: AgentActivityImages = {};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `count`            | *number*           | :heavy_minus_sign: | N/A                |
| `bytes`            | *number*           | :heavy_minus_sign: | N/A                |