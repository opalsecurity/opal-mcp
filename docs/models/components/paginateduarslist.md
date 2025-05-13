# PaginatedUARsList

A list of UARs.

## Example Usage

```typescript
import { PaginatedUARsList } from "opal-mcp/models/components";

let value: PaginatedUARsList = {
  next: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
  previous: "cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ",
  results: [
    {
      uarId: "f454d283-ca87-4a8a-bdbb-df212eca5353",
      name: "Monthly UAR (July)",
      reviewerAssignmentPolicy: "MANUALLY",
      sendReviewerAssignmentNotification: false,
      deadline: new Date("2022-07-14T06:59:59Z"),
      timeZone: "America/Los_Angeles",
      selfReviewAllowed: false,
      uarScope: {
        admins: [
          "f454d283-ca87-4a8a-bdbb-df212eca5353",
          "8763d283-ca87-4a8a-bdbb-df212ecab139",
        ],
        tags: [
          {
            key: "uar_scope",
            value: "high_priority",
          },
        ],
        names: [
          "demo",
          "api",
        ],
      },
    },
    {
      uarId: "39a4d283-ca87-4a8a-bdbb-df212eca5fdb",
      name: "Monthly UAR (August)",
      reviewerAssignmentPolicy: "MANUALLY",
      sendReviewerAssignmentNotification: true,
      deadline: new Date("2022-08-14T06:59:59Z"),
      timeZone: "America/Los_Angeles",
      selfReviewAllowed: false,
      uarScope: {
        admins: [
          "f454d283-ca87-4a8a-bdbb-df212eca5353",
          "8763d283-ca87-4a8a-bdbb-df212ecab139",
        ],
        tags: [
          {
            key: "uar_scope",
            value: "high_priority",
          },
        ],
        names: [
          "demo",
          "api",
        ],
      },
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | The cursor with which to continue pagination if additional result pages exist. | cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw                       |
| `previous`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | The cursor used to obtain the current result page.                             | cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ                       |
| `results`                                                                      | [components.Uar](../../models/components/uar.md)[]                             | :heavy_check_mark:                                                             | N/A                                                                            |                                                                                |