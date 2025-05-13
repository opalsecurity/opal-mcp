# SupportTicket

## Example Usage

```typescript
import { SupportTicket } from "opal-mcp/models/components";

let value: SupportTicket = {
  ticketingProvider: "LINEAR",
  remoteId: "<id>",
  identifier: "<value>",
  url: "https://remarkable-republican.com/",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `ticketingProvider`                                                                  | [components.TicketingProviderEnum](../../models/components/ticketingproviderenum.md) | :heavy_check_mark:                                                                   | The third party ticketing platform provider.                                         | LINEAR                                                                               |
| `remoteId`                                                                           | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |                                                                                      |
| `identifier`                                                                         | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |                                                                                      |
| `url`                                                                                | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |                                                                                      |