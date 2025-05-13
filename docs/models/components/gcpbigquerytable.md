# GcpBigQueryTable

Remote info for GCP BigQuery Table.

## Example Usage

```typescript
import { GcpBigQueryTable } from "opal-mcp/models/components";

let value: GcpBigQueryTable = {
  projectId: "example-project-898931321",
  datasetId: "example-dataset-898931321",
  tableId: "example-table-898931321",
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            | Example                                |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `projectId`                            | *string*                               | :heavy_check_mark:                     | The id of the project the table is in. | example-project-898931321              |
| `datasetId`                            | *string*                               | :heavy_check_mark:                     | The id of the dataset the table is in. | example-dataset-898931321              |
| `tableId`                              | *string*                               | :heavy_check_mark:                     | The id of the table.                   | example-table-898931321                |