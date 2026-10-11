# CustomConnectorAppConfig

Configuration for a Custom Connector app. Does not include the signing
secret; secrets are write-only and never returned by the API.

## Example Usage

```typescript
import { CustomConnectorAppConfig } from "opal-mcp/models/components";

let value: CustomConnectorAppConfig = {
  identifier: "my-connector",
  baseUrl: "https://my-connector.example.com",
  tlsMode: false,
  supportsGroups: false,
  supportsNestedResources: true,
  supportsNestedGroups: false,
  supportsEventIngestion: true,
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   | Example                                                       |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `identifier`                                                  | *string*                                                      | :heavy_check_mark:                                            | The identifier of the Custom Connector.                       | my-connector                                                  |
| `baseUrl`                                                     | *string*                                                      | :heavy_check_mark:                                            | The base URL of the Custom Connector.                         | https://my-connector.example.com                              |
| `tlsMode`                                                     | *boolean*                                                     | :heavy_check_mark:                                            | Whether TLS verification is enabled for the Custom Connector. |                                                               |
| `tlsCaCertContent`                                            | *string*                                                      | :heavy_minus_sign:                                            | Optional PEM-encoded CA certificate content for TLS.          |                                                               |
| `supportsGroups`                                              | *boolean*                                                     | :heavy_check_mark:                                            | Whether the Custom Connector supports groups.                 |                                                               |
| `supportsNestedResources`                                     | *boolean*                                                     | :heavy_check_mark:                                            | Whether the Custom Connector supports nested resources.       |                                                               |
| `supportsNestedGroups`                                        | *boolean*                                                     | :heavy_check_mark:                                            | Whether the Custom Connector supports nested groups.          |                                                               |
| `supportsEventIngestion`                                      | *boolean*                                                     | :heavy_check_mark:                                            | Whether the Custom Connector supports event ingestion.        |                                                               |