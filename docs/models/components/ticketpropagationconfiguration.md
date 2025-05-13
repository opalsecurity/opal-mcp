# TicketPropagationConfiguration

Configuration for ticket propagation, when enabled, a ticket will be created for access changes related to the users in this resource.

## Example Usage

```typescript
import { TicketPropagationConfiguration } from "opal-mcp/models/components";

let value: TicketPropagationConfiguration = {
  enabledOnGrant: false,
  enabledOnRevocation: false,
  ticketProvider: "LINEAR",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `enabledOnGrant`                                                                     | *boolean*                                                                            | :heavy_check_mark:                                                                   | N/A                                                                                  |                                                                                      |
| `enabledOnRevocation`                                                                | *boolean*                                                                            | :heavy_check_mark:                                                                   | N/A                                                                                  |                                                                                      |
| `ticketProvider`                                                                     | [components.TicketingProviderEnum](../../models/components/ticketingproviderenum.md) | :heavy_minus_sign:                                                                   | The third party ticketing platform provider.                                         | LINEAR                                                                               |
| `ticketProjectId`                                                                    | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |                                                                                      |