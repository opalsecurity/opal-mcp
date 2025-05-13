# GcpBigQueryDataset

Remote info for GCP BigQuery Dataset.

## Example Usage

```typescript
import { GcpBigQueryDataset } from "opal-mcp/models/components";

let value: GcpBigQueryDataset = {
  projectId: "example-project-898931321",
  datasetId: "example-dataset-898931321",
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              | Example                                  |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `projectId`                              | *string*                                 | :heavy_check_mark:                       | The id of the project the dataset is in. | example-project-898931321                |
| `datasetId`                              | *string*                                 | :heavy_check_mark:                       | The id of the dataset.                   | example-dataset-898931321                |